const log = require('@src/modules/logger');

module.exports = (response, req, res, next) => {
  log.info('response_data=', JSON.stringify(response));

  next(response);
};
