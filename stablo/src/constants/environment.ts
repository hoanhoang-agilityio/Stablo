export const IS_DEV_ENV = process.env.NODE_ENV === 'development';
export const ENDPOINT = IS_DEV_ENV
  ? 'http://localhost:3000'
  : 'https://stablo-gold.vercel.app';
