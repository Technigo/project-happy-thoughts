export const THOUGHTS_URL = "https://happy-thoughts-nm.herokuapp.com/thoughts";
export const likeUrlFor = (messageId) => `https://happy-thoughts-nm.herokuapp.com/thoughts/${messageId}/like`;
// had to create a function to be able to use the template url outside of it´s scope