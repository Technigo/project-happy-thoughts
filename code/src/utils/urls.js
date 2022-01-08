export const API_URL = "https://happy-tweets-api.herokuapp.com/thoughts";

export const LIKES_URL = (thoughtId) =>
	`https://happy-tweets-api.herokuapp.com/thoughts/${thoughtId}/like`;
