export const API_URL = 'https://happy-thoughts-technigo.herokuapp.com/thoughts';


//uniqe URL. Custom API build by Technigo
export const LIKES_URL = (thoughtId) =>
	`https://happy-thoughts-technigo.herokuapp.com/thoughts/${thoughtId}/like`;
