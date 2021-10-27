export const API_URL = 'https://happy-thoughts-technigo.herokuapp.com/thoughts';
export const API_URL_LIKE = (thoughtID) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  `https://happy-thoughts-technigo.herokuapp.com/thoughts/${thoughtID}/like`;
