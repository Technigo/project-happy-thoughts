export const URL = 'https://happy-thoughts-technigo.herokuapp.com/thoughts';

export const options = (message) => {
  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ message })
  };
};
