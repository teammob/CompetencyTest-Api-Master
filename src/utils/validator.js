import joi from 'joi';
import APIError from '../errors/APIError';

export default (data, schema, allowUnknown) =>
  new Promise((res, rej) => {
    joi.validate(
      data,
      schema,
      { abortEarly: false, allowUnknown },
      (err, value) =>
        err
          ? rej(
              new APIError(
                400,
                'Validation Error',
                err.details.map(d => d.message)
              )
            )
          : res(value)
    );
  });
