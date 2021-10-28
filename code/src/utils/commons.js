export const API_URL = 'https://happy-thoughts-technigo.herokuapp.com/thoughts'

// Dynamic URL (needs to be a function and needs an argument passed to it)
export const LIKES_URL = (thoughtId) => `https://happy-thoughts-technigo.herokuapp.com/thoughts/${thoughtId}/like`