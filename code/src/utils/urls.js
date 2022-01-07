//export const API_URL = 'https://happy-thoughts-backend.herokuapp.com/thoughts?page=2&perPage=2';

export const LIKES_URL = (thoughtId) =>
  `https://happy-thoughts-backend.herokuapp.com/thoughts/${thoughtId}/like`;

export const DELETE_URL = (thoughtId) =>
`https://happy-thoughts-backend.herokuapp.com/thoughts/${thoughtId}`;