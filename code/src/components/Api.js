
export const API_LIST = "https://happy-thoughts-technigo.herokuapp.com/thoughts";

export const API_HEART = (thoughtId) =>
	`https://happy-thoughts-technigo.herokuapp.com/thoughts/${thoughtId}/like`;