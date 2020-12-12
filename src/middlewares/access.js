export default (req, _, next) => {
  if (req.log) {
    req.log.trace('Request started', req.body);
  }
  return next();
};
