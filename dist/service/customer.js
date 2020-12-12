"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _validator = _interopRequireDefault(require("../utils/validator"));

var _customerDataSchema = _interopRequireDefault(require("../utils/customerDataSchema"));

var _request = _interopRequireDefault(require("./request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const buildPayload = ({
  name,
  age,
  country,
  sex
}) => ({
  name,
  age,
  country,
  sex
});

var _default = async params => {
  const valid = await (0, _validator.default)(params, _customerDataSchema.default);

  try {
    const [body] = await (0, _request.default)('http://localhost:8080/api/v1/save', 'POST', buildPayload(valid));
    return body;
  } catch (err) {
    /*eslint-disable*/
    console.log('be-amp amp request', buildPayload(payload));
    throw new APIError(err.status || 500, 'Affordable Monthly Payment Error', {
      message: err.data.message,
      details: err.data.details
    });
  }
};

exports.default = _default;