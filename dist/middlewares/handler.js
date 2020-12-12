"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = cb => (req, res, next) => cb({ ...req.query,
  ...req.params,
  ...req.body
}).then(r => {
  return res.json(r);
}).catch(err => next(err));

exports.default = _default;