const checkNoAuth = (req, res, next) => {
  if (res.locals.user) return res.redirect('/main');
  return next();
};

export default checkNoAuth;
