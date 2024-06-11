export const IS_DEV_ENV = process.env.NODE_ENV === 'development';
export const ENDPOINT = IS_DEV_ENV
  ? process.env.DEV_API_END_POINT
  : process.env.API_END_POINT;
