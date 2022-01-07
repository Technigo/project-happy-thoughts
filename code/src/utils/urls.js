export const API_URL = "https://happy-tweets-api.herokuapp.com/thoughts";

// new URL: https://happy-tweets-api.herokuapp.com/thoughts
// old URL: https://happy-thoughts-technigo.herokuapp.com/thoughts

export const LIKES_URL = (thoughtId) =>
	`https://happy-tweets-api.herokuapp.com/thoughts/${thoughtId}/like`;

// new URL: https://happy-tweets-api.herokuapp.com/thoughts/${thoughtId}/like
// old URL: https://happy-thoughts-technigo.herokuapp.com/thoughts/${thoughtId}/like
