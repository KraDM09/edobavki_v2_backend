const express = require('express');
const log = require('@src/modules/logger');
const config = require('@src/modules/config');
const router = require('@src/modules/router');

const app = express();

class App {
  static startServer() {
    router.init(app);

    return new Promise((resolve) => {
      const server = app.listen(config.api.port, () => {
        log.info(`APP started on port ${config.api.port} 👍`);
        resolve();
      });

      process.on('SIGTERM', () => {
        log.error('SIGTERM signal received.');
        log.error('Closing http server.');
        server.close(() => {
          log.error('Http server closed.');
          process.exit(0);
        });
      });
    });
  }
}

module.exports = App;
