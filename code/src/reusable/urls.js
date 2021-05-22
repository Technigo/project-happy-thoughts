export const HAPPY_THOUGHTS_API = 'https://sandra-project-happy-thoughts.herokuapp.com/thoughts'

export const CATEGORY_URL = (tag) => `https://sandra-project-happy-thoughts.herokuapp.com/thoughts/category/${tag}`

export const USER_URL = (name) => `https://sandra-project-happy-thoughts.herokuapp.com/thoughts/user/${name}`

export const LIKE_URL = (messageId) => `https://sandra-project-happy-thoughts.herokuapp.com/thoughts/${messageId}/likes`