"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _joi = _interopRequireDefault(require("joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const customerDataSchema = _joi.default.object().keys({
  name: _joi.default.string().required(),
  age: _joi.default.number().min(1).required(),
  sex: _joi.default.string().valid('Female', 'Male').required(),
  country: _joi.default.string().required()
});

var _default = customerDataSchema;
exports.default = _default;