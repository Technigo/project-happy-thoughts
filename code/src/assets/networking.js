// const messageUrl = "https://happy-thoughts-technigo.herokuapp.com/thoughts";
const messageUrl = "https://thoughts-api.herokuapp.com/thoughts";

const fetcher = (url, method, callback) => {
  fetch(url, method)
    .then((response) => response.json())
    .then((data) => callback(data))
    .catch((error) => console.log(error));
};

export const fetchMessages = (callback) => fetcher(messageUrl, undefined, callback);

export const postMessages = (input, callback) =>
  fetcher(
    messageUrl,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input }),
    },
    callback
  );

export const postLikes = (id, count, callback) =>
  fetcher(
    `https://thoughts-api.herokuapp.com/thoughts/${id}/like`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ hearts: count }),
    },
    callback
  );
