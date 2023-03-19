const fs = require('fs');
const path = require('path');
const validator = require('validate.js');
const log = require('@src/modules/logger');
const response = require('@src/modules/response');

module.exports = async (req, res, next) => {
  const filePath = path.join(`${process.cwd()}/validators`, `/${req.url}.js`);

  if (!fs.existsSync(filePath)) {
    log.debug(`path: "${filePath}" file not found`);
    return next();
  }

  const validatorSchema = require(filePath);

  let problems = [
  ];

  try {
    await validator.async(req.body, validatorSchema);
  } catch (errors) {
    problems = Object.keys(errors).map((reason) => ({
      reason,
      message: errors[reason][0],
    }));
  }

  if (problems.length <= 0) {
    return next();
  }

  return next({
    code: response.CODE_BR,
    status: response.STATUS_BR,
    problems,
  });
};
