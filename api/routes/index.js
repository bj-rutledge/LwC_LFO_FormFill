/**
 * Created by BJ Rutledge
 * 9/8/22
 * Living with Conviction
 * API Routing
 */

const express = require('express');
const router = express.Router();
const corsOptionsDelagate = require('../src/lib/cors');
const { logger, levels: loggerLevels } = require('../src/lib/logger');

const httpLog = (route, req) => {
  logger.log(
    loggerLevels.http,
    `Reguest received@:${route} ${JSON.stringify(req.headers)}`
  );
  
};

router.use((req, res, next) => {
  httpLog(req.header.name, req);
  next();
});

router.get('/', (req, res, next) => {
  res.send({
    message: res.send(`Living with Conviction API.`),
  });
});

router.get('/test', (req, res, next) => {
  res.send({
    message: res.send(`Living with Conviction API.`),
  });
});

router.get('api/getGr39', corsOptionsDelagate, (req, res, next) => {
  //do get gr39
});

module.exports = router;
