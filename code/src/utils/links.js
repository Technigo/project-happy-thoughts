export const API_URL = "https://happy-thoughts-technigo.herokuapp.com/thoughts";
export const API_LIKES = (thought) => {
  return `https://happy-thoughts-technigo.herokuapp.com/thoughts/${thought._id}/like`;
};
