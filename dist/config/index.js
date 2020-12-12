"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
process.env.NODE_CONFIG_DIR = `${__dirname}/../config`;
const config = void 0;

const load = () => require('config').default; // eslint-disable-line global-require


var _default = config === void 0 ? load() : config;

exports.default = _default;