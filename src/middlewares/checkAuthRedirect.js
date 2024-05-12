const checkAuthRedirect = (req, res, next) => {
  if (req.cookies.refreshToken) {
    res.redirect('/main');
  }
  return next();
};

export default checkAuthRedirect;
