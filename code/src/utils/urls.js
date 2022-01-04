export const API_URL = 'https://happy-thoughts-backend.herokuapp.com/thoughts';
export const LIKES_URL = (thoughtId) =>
  `https://happy-thoughts-backend.herokuapp.com/thoughts/${thoughtId}/like`;