const log4js = require('log4js');
const config = require('@src/modules/config');

const logger = log4js.getLogger();
logger.level = config.log_level;

module.exports = logger;
