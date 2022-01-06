export const API_URL = 'https://happy-thoughts-katie.herokuapp.com/thoughts'
export const API_URL_LIKE = (thoughtID) =>
  `https://happy-thoughts-katie.herokuapp.com/thoughts/${thoughtID}/like`
export const API_URL_DELETE = (thoughtID) =>
  `https://happy-thoughts-katie.herokuapp.com/thoughts/${thoughtID}`
