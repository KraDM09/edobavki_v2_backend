const log = require('@src/modules/logger');
const response = require('@src/modules/logger');

module.exports = (responseObj, req, res, next) => {
  try {
    return res.json(responseObj);
  } catch (e) {
    log.error(e);
    return res.json({
      code: response.CODE_SE,
      status: response.STATUS_SE,
    });
  }
};
