"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _path = require("path");

var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));

var _yamljs = _interopRequireDefault(require("yamljs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const docRouter = (0, _express.Router)();
docRouter.use('/', _swaggerUiExpress.default.serve, _swaggerUiExpress.default.setup(_yamljs.default.load((0, _path.normalize)((0, _path.join)(__dirname, '../swagger/swagger.yml')))));
var _default = docRouter;
exports.default = _default;