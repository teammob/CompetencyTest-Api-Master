import {serializeError} from 'serialize-error';
import APIError from './APIError';
import config from '../config/index';

const defaultError = message =>
  new APIError(
    500,
    'Server Error',
    message || 'Unknown internal server error.'
  );

export default (err, _req, res, _next) => {
  const resolvedError =
    err instanceof APIError ? err : defaultError(err.message);
  const data = config.debug
    ? { ...resolvedError, stack: serializeError(resolvedError).stack }
    : resolvedError;
  res.status(resolvedError.status).json(data);
};
