export const THOUGHTS_URL = "https://happy-thoughts-nm.herokuapp.com/thoughts";
export const LIKE_URL = (_id) => `https://happy-thoughts-nm.herokuapp.com/thoughts/${_id}/like`;
// had to create a function to be able to use the template url outside of it´s scope

