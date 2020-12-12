"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _util = _interopRequireDefault(require("util"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function APIError(status, message, details) {
  Error.call(this);
  Error.captureStackTrace(this, APIError);
  this.details = details || {};
  this.status = status || 500;
  this.message = message || 'Internal Server Error';
  return this;
}

_util.default.inherits(APIError, Error);

var _default = APIError;
exports.default = _default;