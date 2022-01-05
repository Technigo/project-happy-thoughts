export const API_URL = "https://happythoughts-api-w19.herokuapp.com/thoughts";

//"https://happy-thoughts-technigo.herokuapp.com/thoughts";

export const API_URL_HEART = (thoughtsId) =>
  `https://happythoughts-api-w19.herokuapp.com/thougths/${thoughtsId}/like`;

//`https://happy-thoughts-technigo.herokuapp.com/thoughts/${thoughtsId}/like`;

//GET https://happy-thoughts-technigo.herokuapp.com/thoughts
//POST https://happy-thoughts-technigo.herokuapp.com/thoughts
//POST HEARTS https://happy-thoughts-technigo.herokuapp.com/thoughts/THOUGHT_ID/like
