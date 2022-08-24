/**
 *Created by BJ Rutledge
 * Date: 2022-08-20
 * Living with Conviction.org
 * App Logger
 */

const { createLogger, format, transports} = require('winston');

//Custom format
const printFormat = format.printf(({level, message, timestamp, ...metadata}) => `${timestamp} [${level}] : ${message}} ${metadata? JSON.stringify(metadata): ''}`);

/**
 * Winston default levels:
 * error: 0,
 * warn: 1,
 * info: 2,
 * http: 3,
 * verose: 4,
 * debug: 5,
 * silly: 6
 */
const level = {
  error: 'error',
  warn: 'warn',
  info: 'info',
  http: 'http',
  verbose: 'verbose',
  debug: 'debug',
  silly: 'debug',
};

const logger = createLogger({
  level: level,
  format: format.combine(
    format.timestamp({
      format: 'YY-MM-DD HH:mm:ss',
    }),
    format.errors({ stack: true }),
    format.splat(),
    printFormat
  ),
  defaultMeta: { service: 'form-filler-api' },
  transports: [
    /**write all logs with an importance level of error amd debug to their own files 
     * and write all logs to a combined log
     */
    new transports.File({ filename: 'api-error.log', level: level.error}),
    new transports.File({ filename: 'api-debug.log', level: level.debug}),
    new transports.File({ filename: 'api-combined.log', level:level })
  ],
});

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new transports.Console({
      format: format.combine(format.colorize(), format.simple()),
    })
  );
}

module.exports.logger = logger;
module.exports.level = level;
