import express from 'express';
import { Favorite } from '../../../db/models';

const favoritRouter = express.Router();

favoritRouter.post('/:id', async (req, res) => {
  const { id } = req.params;
  console.log(id, res.locals.user.id, '==============>>>');
  const fav = await Favorite.create({ user_id: res.locals.user.id, recept_id: id });

  res.sendStatus(200);
});

favoritRouter.delete('/:id', async (req, res) => {
  try {
    await Favorite.destroy(
      { where: { id: req.params.id } },
    );
    res.sendStatus(200);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default favoritRouter;
