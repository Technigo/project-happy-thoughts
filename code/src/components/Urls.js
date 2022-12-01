/* Got this Idea from a past student, to keep the urls seperate, the likes_url makes an event
    that saves the id on which the user presses "like" */
export const HAPPY_URL = 'https://project-happy-thoughts-api-nczig4g6cq-lz.a.run.app/thoughts'
export const LIKES_URL = (likeId) => `https://project-happy-thoughts-api-nczig4g6cq-lz.a.run.app/thoughts/${likeId}/hearth`
