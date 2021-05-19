const mainURL = process.env.NODE_ENV === 'development' ? 'http://localhost:1337' : 'https://happy-thinking.herokuapp.com';
export const URL = `${mainURL}/thoughts`;

export const URL_LIKE = (id) => `${mainURL}/thoughts/${id}/like`;

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
