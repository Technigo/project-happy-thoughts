
// GET This will return the latest 20 thoughts from the API
export const API_URL = "https://all-happy-thoughts.herokuapp.com/thoughts"

export const API_URL_LIKES = (messageID) => `https://all-happy-thoughts.herokuapp.com/thoughts/${messageID}/likes` //why do I need backticks and $, no ""?, --to pass argument to a string.
