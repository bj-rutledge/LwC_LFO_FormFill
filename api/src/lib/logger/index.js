/**
 *Created by BJ Rutledge
 * Date: 2022-08-20
 * Living with Conviction.org
 * App Logger
 */

const { createLogger, format, transports } = require('winston');
const { printf, simple, errors, combine, timestamp, splat, colorize } = format;
//Custom format
// const printFormat = format.printf(({level, message, timestamp, ...metadata}) => `${timestamp} [${level}] : ${message}} ${metadata? JSON.stringify(metadata): ''}`);

/**
 * Winston default levels:CU
 */
const levels = {
  error: 'error',
  warn: 'warn',
  info: 'info',
  http: 'http',
  debug: 'debug',
  critical: 'critical',
};

const logger = createLogger({
  levels: levels,
  format: combine(
    timestamp({
      format: 'YY-MM-DD HH:mm:ss',
    }),
    errors({ stack: true }),
    splat(),
    printf(
      ({ level, message, timestamp, ...metadata }) =>
        `${timestamp} [${level}] : ${message}} ${
          metadata ? JSON.stringify(metadata) : ''
        }`
    )
  ),
  defaultMeta: { service: 'form-filler-api' },
  transports: [
    /**write all logs with an importance level of error, debug, http, and debug to
     * their own files and all logs combined to api.log
     */
    new transports.File({ filename: './logs/api-error.log', level: levels.error }),
    new transports.File({ filename: './logs/api-http.log', level: levels.http }),
    new transports.File({ filename: './logs/api-debug.log', level: levels.debug }),
    new transports.File({ filename: './logs/api.log', levels: levels }),
  ],
});

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new transports.Console({
      format: combine(colorize(), simple()),
    })
  );
}

module.exports.logger = logger;
module.exports.levels = levels;
