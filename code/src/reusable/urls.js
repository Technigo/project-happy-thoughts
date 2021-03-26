//API URL assigened to variable
export const THOUGHTS_URL = 'https://happy-thoughts-technigo.herokuapp.com/thoughts'
//To pass id to URL make a function that will inject one argument to the url string - return string with the argument in it
export const LIKES_URL = (messageID) => `https://happy-thoughts-technigo.herokuapp.com/thoughts/${messageID}/like`