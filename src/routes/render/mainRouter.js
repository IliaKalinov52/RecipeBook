import express from 'express';
import { Recept } from '../../../db/models';

const mainRouter = express.Router();

mainRouter.get('/', async (req, res) => {
  const recepts = await Recept.findAll();
  // console.log(res.locals.user);
  const { user } = res.locals;
  // console.log(user);
  // const initState = { recepts, user };
  // console.log(initState);
  res.render('MainPage', { recepts, user });
});

export default mainRouter;
