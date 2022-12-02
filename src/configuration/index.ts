export const DATA_BASE_CONFIGURATION = {
  mongoConnectionString: process.env.MONGO_CONNECTION as string,
};

export const JWT_CONFIGURATION = {
  secret: process.env.JWT_SECRET as string,
  expiresIn: '60s',
};
