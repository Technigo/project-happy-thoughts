export const URL = 'https://happy-thinking.herokuapp.com/thoughts';

export const URL_LIKE = (id) => `https://happy-thinking.herokuapp.com/thoughts/${id}/like`;

export const options = (newThought) => {
  const { message, category } = newThought;
  const opts = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  };
  return newThought !== null
    ? { ...opts, body: JSON.stringify({ message, category }) }
    : opts;
};
