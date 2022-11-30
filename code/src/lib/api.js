const BASE_URL = 'https://project-happy-thoughts-api-p52jzdhmrq-lz.a.run.app';
// const BASE_URL = 'http://localhost:8080';

export const getThoughts = async () => {
  const res = await fetch(`${BASE_URL}/thoughts`);
  const json = await res.json();

  return json;
};

export const likeThought = async (thoughtId) => {
  const res = await fetch(`${BASE_URL}/thoughts/${thoughtId}/like`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const json = await res.json();
  return json;
};
