/* Got this Idea from a past student, to keep the urls seperate, the likes_url makes an event
    that saves the id on which the user presses "like" */
export const HAPPY_URL = 'https://happy-thoughts-technigo.herokuapp.com/thoughts'
export const LIKES_URL = (likeId) => `https://happy-thoughts-technigo.herokuapp.com/thoughts/${likeId}/like`