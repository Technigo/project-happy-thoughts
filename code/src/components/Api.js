
export const API_LIST = "https://api-thoughts-happy.herokuapp.com/thoughts";

export const API_HEART = (thoughtId) =>
	`https://api-thoughts-happy.herokuapp.com/thoughts/${thoughtId}/like`;

// ORIGINAL TECHNIGO API
//"https://happy-thoughts-technigo.herokuapp.com/thoughts";
// `https://happy-thoughts-technigo.herokuapp.com/thoughts/${thoughtId}/like`;