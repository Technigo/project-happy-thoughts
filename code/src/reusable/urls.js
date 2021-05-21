
export const THOUGHTS_URL = 'https://small-api-happy-thoughts.herokuapp.com/thoughts'
export const LIKES_URL = (messageID) => `https://small-api-happy-thoughts.herokuapp.com/thoughts/${messageID}/like`
export const DELETE_THOUGHT_URL = (messageID) => `https://small-api-happy-thoughts.herokuapp.com/thoughts/${messageID}`