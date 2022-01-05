export const API_URL = 'https://rosanna-happy-thoughts-api.herokuapp.com/thoughts';


//uniqe URL. Custom API build by Rosanna Dahlberg
export const LIKES_URL = (thoughtId) =>
	`https://rosanna-happy-thoughts-api.herokuapp.com/thoughts/${thoughtId}/like`;
