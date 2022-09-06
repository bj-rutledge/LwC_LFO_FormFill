/**
 * Created by BJ Rutledge
 * Date: 2022-08-18
 * Living with Conviction.org
 **/

require('dotenv').config('../../.env');
const { logger, levels } = require('../lib/logger');

if (process.env.APP !== 'LwC FormFill API') {
  const error = new Error('env failed to load.');
  logger.log(levels.error, error);
  throw error;
}

logger.log(
  levels.info,
  `Loaded environment configuration. Currently operating in ${process.env.NODE_ENV} environment.`
);
