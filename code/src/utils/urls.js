export const API_URL = 'https://happy-thoughts-technigo.herokuapp.com/thoughts';

export const LIKES_URL = (id) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  `https://happy-thoughts-technigo.herokuapp.com/thoughts/${id}/like`;
