'use strict';
/**
 * Created by BJ Rutledge
 * Date:2022-08-29
 * Living with Conviction.org
 * LFO FormFill API
 */

//Set up environment. Will throw error if fails.
require('./src/config');

const express = require('express');
const { logger, levels: loggerLevels } = require('./src/lib/logger');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const routes = require('./routes');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});



switch (process.env.NODE_ENV) {
  case 'dev':
    app.set('env', 'development');
    break;
  case 'production':
    app.set('env', 'production');
    break;
  default:
    logger.logger(
      loggerLevels.error,
      `ENV should be 'dev', 'test', or 'production'... Exiting process`
    );
    process.exit();
}

//set up extra dev logging
if (app.get('env') === 'development') {
  app.use((err, req, res, next) => {
    logger.log(loggerLevels.error, err);
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err,
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => {
  logger.log(loggerLevels.error, err);
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err,
  });
});
// app.use('/', routes); 
app.get('/',(req, res, next) => {
    logger.log(loggerLevels.debug, 'fired from get');
    res.send('Hello!')
})
module.exports = app; 