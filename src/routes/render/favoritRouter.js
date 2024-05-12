import express from 'express';
import { Recept, Favorite, User } from '../../../db/models';

const favoritRouter = express.Router();

favoritRouter.get('/', async (req, res) => {
  const favorites = await Favorite.findAll({
    where: { user_id: res.locals.user.id },
    include: [User, Recept],
  });
  res.render('FavoritePage', { favorites: JSON.parse(JSON.stringify(favorites)) });
});

// favoritRouter.post('/add', async (req, res) => {
//   // console.log()
//   const { id } = req.body;
//   const fav = await Favorite.create({ userId: res.locals.user.id, productId: id });
//   res.json(fav);
// });

export default favoritRouter;
