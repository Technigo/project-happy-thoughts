
// GET This will return the latest 20 thoughts from the API
export const API_URL = "https://happy-thoughts-technigo.herokuapp.com/thoughts"

export const API_URL_LIKES = (messageID) => `https://happy-thoughts-technigo.herokuapp.com/thoughts/${messageID}/like` //why do I need backticks and $, no ""?, --to pass argument to a string.
