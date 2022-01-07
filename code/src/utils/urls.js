export const API_URL = "https://myhappy-thoughts-api.herokuapp.com/thoughts";

export const LIKES_URL = (thoughtId) =>
  `https://happy-thoughts-technigo.herokuapp.com/thoughts/${thoughtId}/like`;
