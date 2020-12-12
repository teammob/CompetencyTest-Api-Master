"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _AxiosError = _interopRequireDefault(require("../errors/AxiosError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = async () => {
  try {
    const {
      data
    } = await _axios.default.request({
      method: 'GET',
      url: 'https://restcountries.eu/rest/v1/region/Europe'
    });
    return JSON.stringify(data.map(x => x.name));
  } catch (err) {
    throw new _AxiosError.default(err);
  }
};

exports.default = _default;