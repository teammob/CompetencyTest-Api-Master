"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _joi = _interopRequireDefault(require("joi"));

var _APIError = _interopRequireDefault(require("../errors/APIError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (data, schema, allowUnknown) => new Promise((res, rej) => {
  _joi.default.validate(data, schema, {
    abortEarly: false,
    allowUnknown
  }, (err, value) => err ? rej(new _APIError.default(400, 'Validation Error', err.details.map(d => d.message))) : res(value));
});

exports.default = _default;