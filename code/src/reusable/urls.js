export const API_URL = (page, perPage) => `https://poggi-happy-thoughts-api.herokuapp.com/thoughts?page=${page}&size=${perPage}`
export const LIKES_URL = (messageID) => `https://poggi-happy-thoughts-api.herokuapp.com/thoughts/${messageID}/like`

//export const LIKES_URL = (messageID) => `https://happy-thoughts-technigo.herokuapp.com/thoughts/${messageID}/like`
//export const API_URL = 'https://happy-thoughts-technigo.herokuapp.com/thoughts'
 //export const API_URL = 'https://poggi-happy-thoughts-api.herokuapp.com/thoughts'