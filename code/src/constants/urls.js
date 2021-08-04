export const API_URL = 'https://a-lenksjo-happy-thoughts-api.herokuapp.com/thoughts' 
export const POST_HEART_URL = (messageID) =>  `https://a-lenksjo-happy-thoughts-api.herokuapp.com/thoughts/${messageID}/likes`
export const DELETE_THOUGHT_URL = (messageID) => `https://a-lenksjo-happy-thoughts-api.herokuapp.com/thoughts/${messageID}`
