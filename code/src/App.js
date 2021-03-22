import React from "react";
import { useState, useEffect } from "react";
import Post from "./component/Post";
import Grid from "@material-ui/core/Grid";

export const App = () => {
  const [apiFetch, setApiFetch] = useState([]);

  const API_URL = "https://happy-thoughts-technigo.herokuapp.com/thoughts";

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((json) => setApiFetch(json));
  }, []);

  console.log(apiFetch);

  return (
    <Grid container spacing={1} justify="center">
      {apiFetch.map((post) => (
        <Post
          key={post._id}
          message={post.message}
          likes={post.hearts}
          timeStamp={post.createdAt}
        />
      ))}
    </Grid>
  );
};
