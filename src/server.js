import express from 'express';
import morgan from 'morgan';
import path from 'path';
import cookieParser from 'cookie-parser';
import 'dotenv/config';
import jsxRender from './utils/jsxRender';
import indexRouter from './routes/indexRouter';
import resLocals from './middlewares/resLocals';
import authRouter from './routes/render/authRouter';
import apiAuthRouter from './routes/api/apiAuthRouter';
import mainRouter from './routes/render/mainRouter';
import receptRouter from './routes/render/receptRouter';
import favoritRouter from './routes/api/apiFavoriteRouter';
import favoriteRouter from './routes/render/favoritRouter';

const PORT = process.env.PORT || 3000;
const app = express();

app.engine('jsx', jsxRender);
app.set('view engine', 'jsx');
app.set('views', path.join(__dirname, 'components', 'pages'));

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(resLocals);

// app.get('/favorite', (req, res) => {
//     const favorites = await Favorite.findAll({include -> User -> where})
//   res.render('FavoritePage');
// });
app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/api/auth', apiAuthRouter);
app.use('/main', mainRouter);
app.use('/recept', receptRouter);
app.use('/api/favorite', favoritRouter);
app.use('/favorite', favoriteRouter);

app.listen(PORT, () => console.log(`App has started on port ${PORT}`));
