export const API_URL = (page) =>`http://localhost:8080/thoughts?page=${page}`
export const LIKES_URL = (messageID) => `http://localhost:8080/thoughts/${messageID}/like`