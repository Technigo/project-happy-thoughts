export const API_URL = (page, perPage) = `https://project-happy-thoughts-sari.herokuapp.com/thoughts?page=${page}&per_page=${perPage}`

export const LIKES_URL = (messageID) => `https://project-happy-thoughts-sari.herokuapp.com/thoughts/${messageID}/like`
