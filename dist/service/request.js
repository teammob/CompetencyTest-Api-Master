"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _AxiosError = _interopRequireDefault(require("../errors/AxiosError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = async (url, method, body) => {
  const bodyParams = method === 'GET' ? {
    params: body
  } : {
    data: body
  };

  try {
    const {
      data: d,
      headers: h
    } = await _axios.default.request({
      method,
      url,
      ...bodyParams
    });
    return [d, h];
  } catch (err) {
    /*eslint-disable*/
    console.log('service request error', err, method, url.toString(), bodyParams);
    throw new _AxiosError.default(err);
  }
};

exports.default = _default;