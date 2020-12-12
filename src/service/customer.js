import validator from '../utils/validator';
import customerDataSchema from '../utils/customerDataSchema';
import request from './request';

const buildPayload = ({ name, age, country, sex }) => ({
  name,
  age,
  country,
  sex
});

export default async params => {
  const valid = await validator(params, customerDataSchema);
  try {
    const [body] = await request(
      'http://localhost:8080/api/v1/save',
      'POST',
      buildPayload(valid)
    );

    return body;
  } catch (err) {
    /*eslint-disable*/
    console.log('be-amp amp request', buildPayload(payload))
    throw new APIError(err.status || 500, 'Affordable Monthly Payment Error', {
      message: err.data.message,
      details: err.data.details
    });
  }


};
