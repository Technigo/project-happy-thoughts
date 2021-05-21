// export const API_URL = 'https://happy-thoughts-technigo.herokuapp.com/thoughts'
// export const LIKE_URL = (_id) => `https://happy-thoughts-technigo.herokuapp.com/thoughts/${_id}/like`

export const API_URL = (page, perPage) => `https://sofias-happy-thought-api.herokuapp.com/thoughts?page=${page}&perPage=${perPage}`
export const LIKE_URL = (_id) => `https://sofias-happy-thought-api.herokuapp.com/thoughts/${_id}/like`
export const DELETE_URL = (_id) => `https://sofias-happy-thought-api.herokuapp.com/thoughts/${_id}`

