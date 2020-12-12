"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = (req, _, next) => {
  if (req.log) {
    req.log.trace('Request started', req.body);
  }

  return next();
};

exports.default = _default;