const { default: jwtConfig } = require('./jwtConfig');

const cookieConfig = {
  access: {
    httpOnly: true,
    maxAge: jwtConfig.access.expiresIn,
  },
  refresh: {
    httpOnly: true,
    maxAge: jwtConfig.refresh.expiresIn,
  },
};

export default cookieConfig;
