export const API_URL = "https://ad-happy-thoughts-api.herokuapp.com/thoughts";

export const LIKES_URL = (thoughtId) =>
  `https://ad-happy-thoughts-api.herokuapp.com/thoughts/${thoughtId}/like`;
