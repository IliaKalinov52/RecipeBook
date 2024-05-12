import express from 'express';
import { Recept } from '../../../db/models';

const receptrouter = express.Router();

// receptrouter.get('/', (req, res) => {
//   res.render('ReceptPage');
// });

receptrouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  const recept = await Recept.findOne({ where: { id } });
  res.render('ReceptPage', { recept });
});

export default receptrouter;
