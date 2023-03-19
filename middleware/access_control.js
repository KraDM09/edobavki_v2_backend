const jwt = require('jsonwebtoken');
const log = require('@src/modules/logger');
const response = require('@src/modules/response');
const {
  api,
} = require('@src/modules/config');

module.exports = async (req, res, next) => {
  const token = req.headers['x-access-token'];

  const forbidden = () => next({
    code: response.CODE_FB,
    status: response.STATUS_FB,
    error: 'Access denied',
  });

  if (!token) {
    log.info('Token not present');
    return forbidden();
  }

  const logContext = `url=${req.originalUrl}, token=${token.substring(-10)}`;

  try {
    const decoded = jwt.verify(token, api.secret);

    if (!decoded) {
      log.info(logContext, 'Fail decode token');
      return forbidden();
    }

    req.user = {
      user_id: decoded.user_id,
    };
  } catch (error) {
    log.warn(logContext, 'Token NOT OK error:', error.message);
    return forbidden();
  }

  return next();
};
