"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _serializeError = require("serialize-error");

var _APIError = _interopRequireDefault(require("./APIError"));

var _index = _interopRequireDefault(require("../config/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const defaultError = message => new _APIError.default(500, 'Server Error', message || 'Unknown internal server error.');

var _default = (err, _req, res, _next) => {
  const resolvedError = err instanceof _APIError.default ? err : defaultError(err.message);
  const data = _index.default.debug ? { ...resolvedError,
    stack: (0, _serializeError.serializeError)(resolvedError).stack
  } : resolvedError;
  res.status(resolvedError.status).json(data);
};

exports.default = _default;