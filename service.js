require('module-alias/register');
const log = require('@src/modules/logger');

(async () => {
  try {
    const App = require('./modules/app');
    await App.startServer();
  } catch (error) {
    log.error(error);
  }
})();
