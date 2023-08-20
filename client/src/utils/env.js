// eslint-disable-next-line no-undef
export const inProduction = process.env.NODE_ENV === 'production';

export const apiUrl = inProduction ? 'https://my-portfolio-api-theta.vercel.app/' : 'http://localhost:3000';


