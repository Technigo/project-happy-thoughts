export const THOUGHTS_URL = "https://happy-thoughts-technigo.herokuapp.com/thoughts";
export const likeUrlFor = (messageId) => `https://happy-thoughts-technigo.herokuapp.com/thoughts/${messageId}/like`;
// had to create a function to be able to use the template url outside of it´s scope