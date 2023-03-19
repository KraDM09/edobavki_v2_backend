const log = require('@src/modules/logger');

module.exports = (req, res, next) => {
  log.info(`${req.method} url:: ${req.originalUrl}`);

  if (Object.keys(req.body).length > 0) {
    log.info('request_data=', JSON.stringify(req.body));
  }

  next();
};
