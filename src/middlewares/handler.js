export default cb => (req, res, next) =>
  cb({ ...req.query, ...req.params, ...req.body })
    .then(r => {
      return res.json(r);
    })
    .catch(err => next(err));
