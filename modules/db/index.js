const fs = require('fs');
const mysql = require('mysql');
const sqrl = require('squirrelly');
const log = require('@src/modules/logger');
const {
  db,
} = require('@src/modules/config');

class MySql {
  constructor() {
    this.ssl = undefined;
    this.trueConnect = false;
    this.retryAttempt = 0;
    this.retryTimer = null;
    this.retryTimeout = 3000;
    this.firstRetryTimeout = 1000;
    this.maxRetryAttempt = 3;
    this.queriesPath = `${process.cwd()}/modules/db/queries.sql`;
    this.config = db;

    if (this.config.ssl.enabled) {
      this.ssl = this.getSsl();
    }

    this.createConnection();
    this.queries = this.parseSqlQueries();
  }

  createConnection() {
    if (this.db) {
      this.db.destroy();
    }

    this.db = mysql.createConnection({
      host: this.config.host,
      user: this.config.user,
      password: this.config.password,
      database: this.config.database,
      port: this.config.port,
      ssl: this.ssl,
    });

    setTimeout(() => {
      if (!this.trueConnect) {
        this.onError(new Error('TIMEOUT error when try to connect to database'));
      }
    }, this.firstRetryTimeout);

    this.db._protocol.on('initialize', () => {
      this.resetRetryTimer();
      log.info('DB: connected');
    });

    this.db.connect((error) => {
      if (error) {
        this.onError(error);
      }
    });

    this.db.on('error', (error) => {
      this.onError(error);
    });
  }

  getSsl() {
    return {
      ca: fs.readFileSync(this.config.ssl.ca, 'utf8'),
      cert: fs.readFileSync(this.config.ssl.cert, 'utf8'),
      key: fs.readFileSync(this.config.ssl.key, 'utf8'),
    };
  }

  onError(error) {
    if (this.retryAttempt >= this.maxRetryAttempt) {
      log.error('DB error:', error);
      process.exit(1);
      return;
    }

    log.error('DB connect error:', error.message);
    this.setRetryTimer();
  }

  setRetryTimer() {
    this.retryAttempt += 1;
    this.trueConnect = false;
    const timeout = this.retryAttempt === 1 ? this.firstRetryTimeout : this.retryTimeout;

    log.warn('DB: retry attempt', this.retryAttempt, 'await', timeout, 'ms');

    clearTimeout(this.retryTimer);

    this.retryTimer = setTimeout(() => {
      this.createConnection();
    }, timeout);
  }

  resetRetryTimer() {
    this.trueConnect = true;
    this.retryAttempt = 0;
    clearTimeout(this.retryTimer);
    this.retryTimer = null;
  }

  async query(query, data) {
    if (this.retryAttempt) {
      throw new Error('database retry');
    }

    let result;

    try {
      const promise = new Promise((resolve, reject) => {
        const sql = this.formatQuery(query, data);

        this.db.query({
          sql,
          values:
                    data,
          timeout: 2000,
        }, (error, rows) => {
          if (error) {
            return reject(error);
          }

          const tempRows = Object.values(JSON.parse(JSON.stringify(rows)));

          return resolve(tempRows);
        });
      });

      result = await promise;
    } catch (error) {
      if (error.fatal && !this.retryAttempt) {
        this.onError(error);
      }

      log.error('DB: Query failed', query, 'with data:', data, error.message);
      throw error;
    }

    return result;
  }

  parseSqlQueries() {
    const descriptor = fs.openSync(this.queriesPath, 'r');
    const queries = fs.readFileSync(descriptor, 'utf8');
    const rows = queries.split('--');
    const result = {};

    rows.forEach((query) => {
      const tempQuery = query.split('://');
      const name = tempQuery.shift();

      if (name) {
        result[name] = tempQuery.join('://').trim();
      }
    });

    return result;
  }

  formatQuery(query, data) {
    let sql = this.queries[query];

    if (Object.keys(data)) {
      const compiled = sqrl.compile(sql);
      sql = compiled(data, sqrl.defaultConfig);
    }

    if (data) {
      sql = sql.replace(/\${(\w+)}/g, (txt, key) => {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          return this.db.escape(data[key]);
        }

        return txt;
      });
    }

    return sql;
  }
}

module.exports = new MySql();
