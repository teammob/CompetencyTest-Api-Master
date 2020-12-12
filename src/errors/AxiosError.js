import util from 'util';
import R from 'ramda';

function AxiosError(axisErr) {
  Error.call(this);
  Error.captureStackTrace(this, AxiosError);

  this.headers = R.pathOr({}, ['response', 'headers'], axisErr);
  this.status = R.pathOr(0, ['response', 'status'], axisErr);
  this.data = R.pathOr({}, ['response', 'data'], axisErr);
  this.statusText = R.pathOr('', ['response', 'statusText'], axisErr);

  return this;
}

util.inherits(AxiosError, Error);

export default AxiosError;
