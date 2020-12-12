"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _util = _interopRequireDefault(require("util"));

var _ramda = _interopRequireDefault(require("ramda"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function AxiosError(axisErr) {
  Error.call(this);
  Error.captureStackTrace(this, AxiosError);
  this.headers = _ramda.default.pathOr({}, ['response', 'headers'], axisErr);
  this.status = _ramda.default.pathOr(0, ['response', 'status'], axisErr);
  this.data = _ramda.default.pathOr({}, ['response', 'data'], axisErr);
  this.statusText = _ramda.default.pathOr('', ['response', 'statusText'], axisErr);
  return this;
}

_util.default.inherits(AxiosError, Error);

var _default = AxiosError;
exports.default = _default;