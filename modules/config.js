const dotenv = require('dotenv');
const env = require('env-var');

dotenv.config();

module.exports = {
  log_level: env.get('LOG_LEVEL').default('info').required().asString(),
  app: {
    name: env.get('APP_NAME').default('edobavki_v2_backend').required().asString(),
    env: env.get('NODE_ENV').default('development').required().asString(),
  },
  api: {
    port: env.get('API_PORT').default(3000).asPortNumber(),
    path: env.get('API_PATH').required().asString(),
    secret: env.get('API_SECRET').required().asString(),
  },
  db: {
    host: env.get('DB_HOST').required().asString(),
    user: env.get('DB_USER').required().asString(),
    password: env.get('DB_PASSWORD').required().asString(),
    database: env.get('DB_NAME').required().asString(),
    port: env.get('DB_PORT').default(3306).asPortNumber(),
    ssl: {
      enabled: env.get('DB_SSL_ENABLED').default(0).asInt(),
      ca: env.get('DB_SSL_CA').asString(),
      cert: env.get('DB_SSL_CERT').asString(),
      key: env.get('DB_SSL_KEY').asString(),
    },
  },
};
