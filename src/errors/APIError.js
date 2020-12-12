import util from 'util';

function APIError(status, message, details) {
  Error.call(this);
  Error.captureStackTrace(this, APIError);

  this.details = details || {};
  this.status = status || 500;
  this.message = message || 'Internal Server Error';

  return this;
}

util.inherits(APIError, Error);

export default APIError;
