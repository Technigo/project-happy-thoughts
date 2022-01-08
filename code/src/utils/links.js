export const API_URL = "https://mary-snopok-happy-thoughts.herokuapp.com/thoughts";
export const API_LIKES = (thought) => {
  return `https://mary-snopok-happy-thoughts.herokuapp.com/thoughts/${thought._id}/like`;
};
