export const API_URL = (page) =>`https://happy-nobel.herokuapp.com/thoughts?page=${page}`
export const LIKES_URL = (messageID) => `https://happy-nobel.herokuapp.com/thoughts/${messageID}/like`