import express from 'express';
import checkAuthRedirect from '../middlewares/checkAuthRedirect';

const router = express.Router();

router.get('/', checkAuthRedirect, (req, res) => {
  res.redirect('/auth/login');
});

router.get('/404', (req, res) => {
  res.render('NotFoundPage');
});

export default router;
