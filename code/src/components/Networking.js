import React from "react";

const URL = "https://happy-thoughts-technigo.herokuapp.com/thoughts";

const fetcher = (url, callback) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      callback(data);
    })
    .catch((error) => console.log(error));
};

const Networking = () => {
  fetcher(URL, (data) => {
    data.map((item) => {
      return console.log(item.message);
    });
  });
  return <h1>I'm an API call!</h1>;
};

export default Networking;
