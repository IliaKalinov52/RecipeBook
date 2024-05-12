import jwt from 'jsonwebtoken';
import 'dotenv/config';
import generateTokens from './generateTokens';
import cookieConfig from '../config/cookiesConfig';

export const verifyRefreshToken = (req, res, next) => {
  try {
    const { refreshToken } = req.cookies;
    const { user } = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);

    const { access, refresh } = generateTokens({ user });

    res
      .cookies('accessToken', access, cookieConfig.access)
      .cookies('refreshToken', refresh, cookieConfig.refresh);

    return next();
  } catch (error) {
    return res.sendStatus(401);
  }
};

// eslint-disable-next-line import/prefer-default-export
export const verifyAccessToken = (req, res, next) => {
  try {
    const { accessToken } = req.cookies;
    const { user } = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
    res.locals.user = user;
    return next();
  } catch (error) {
    return verifyRefreshToken(req, res, next);
  }
};
