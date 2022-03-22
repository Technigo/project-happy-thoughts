const messageUrl = "https://happy-thoughts-technigo.herokuapp.com/thoughts";

const fetcher = (url, callback) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => callback(data))
    .catch((error) => console.log(error));
};

export const fetchMessages = (callback) => fetcher(messageUrl, callback);
