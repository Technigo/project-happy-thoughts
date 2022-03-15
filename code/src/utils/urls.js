
export const API_URL = 'https://happythoughts-project-api.herokuapp.com/thoughts';


export const LIKES_URL = (thoughtId) => 
`https://happythoughts-project-api.herokuapp.com/thoughts/${thoughtId}/like`;

export const DELETE_URL = (thoughtId) => 
`https://happythoughts-project-api.herokuapp.com/thoughts/${thoughtId}/delete`;