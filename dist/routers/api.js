"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _service = require("../service");

var _handler = _interopRequireDefault(require("../middlewares/handler"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const apiRouter = (0, _express.Router)();
apiRouter.post('/save', (0, _handler.default)(_service.saveCustomer));
apiRouter.get('/countries', (0, _handler.default)(_service.getCountries));
var _default = apiRouter;
exports.default = _default;