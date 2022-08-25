/**
 * Created by BJ Rutledge
 * Date:2022-08-25
 * Living with Conviction.org
 * testing logger outside of jest
 */

const {logger, level} = require('../../src/lib/logger');
logger.log(level.debug, 'Debug test'); 
logger.log(level.error, 'test error log');
logger.log(level.http, 'test http')
logger.log(level.info, 'test info');
logger.log(level.warn, 'test warn')

