"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logger = exports.expressLogger = void 0;

const logger = require('pino')({
  level: 'trace'
});

exports.logger = logger;

const expressLogger = require('express-pino-logger')({
  logger
});

exports.expressLogger = expressLogger;