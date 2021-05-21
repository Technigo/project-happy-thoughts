// The old APIs from Technigo
//export const API_URL = 'https://happy-thoughts-technigo.herokuapp.com/thoughts'
//export const APIHEARTS_URL = (THOUGHT_ID) => `https://happy-thoughts-technigo.herokuapp.com/thoughts/${THOUGHT_ID}/like`


// MY OWN API AND BACKEND URLs 
export const API_URL = 'https://happythoughts-api-mongodb.herokuapp.com/thoughts'

export const APIHEARTS_URL = (THOUGHT_ID) => `https://happythoughts-api-mongodb.herokuapp.com/thoughts/${THOUGHT_ID}/hearts`

export const APIDELETE_URL = (THOUGHT_ID) => `https://happythoughts-api-mongodb.herokuapp.com/thoughts/${THOUGHT_ID}`