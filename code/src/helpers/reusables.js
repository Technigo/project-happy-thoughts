export const URL = 'https://happy-thinking.herokuapp.com/thoughts';

export const URL_LIKE = (id) => `https://happy-thinking.herokuapp.com/thoughts/${id}/like`;

export const options = (message) => {
  const opts = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  };
  return message !== null ? { ...opts, body: JSON.stringify({ message }) } : opts;
};
