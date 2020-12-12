"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _docs = _interopRequireDefault(require("./docs"));

var _api = _interopRequireDefault(require("./api"));

var _logger = require("../utils/logger");

var _access = _interopRequireDefault(require("../middlewares/access"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const rootRouter = (0, _express.Router)();
rootRouter.use(_logger.expressLogger);
rootRouter.use(_access.default);
rootRouter.use('/api', _api.default);
rootRouter.use('/docs', _docs.default);
rootRouter.get('/ready', (req, res) => res.sendStatus(200));
var _default = rootRouter;
exports.default = _default;