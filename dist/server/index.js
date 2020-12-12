"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _http = _interopRequireDefault(require("http"));

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cors = _interopRequireDefault(require("cors"));

var _index = _interopRequireDefault(require("../errors/index"));

var _APIError = _interopRequireDefault(require("../errors/APIError"));

var _routers = _interopRequireDefault(require("../routers"));

var _index2 = _interopRequireDefault(require("../config/index"));

var _logger = require("../utils/logger");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = () => {
  const app = (0, _express.default)();
  app.use(_bodyParser.default.json());
  app.use((0, _cors.default)());
  app.use(_routers.default);
  app.use((_, __, next) => next(new _APIError.default(404, 'Not found', 'Endpoint not found')));
  app.use(_index.default);

  const server = _http.default.createServer(app);

  server.listen(_index2.default.port, () => _logger.logger.info(`Server is listening on port ${_index2.default.port}`));
  return {
    app,
    server
  };
};

exports.default = _default;