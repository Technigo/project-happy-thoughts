import React from "react";
import { useState, useEffect } from "react";
import Post from "./component/Post";
import PostForm from "./component/PostForm";

import Grid from "@material-ui/core/Grid";

export const App = () => {
  const [apiFetch, setApiFetch] = useState([]);
  const [postFormValue, setPostFormValue] = useState("");

  const API_URL = "https://happy-thoughts-technigo.herokuapp.com/thoughts";

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((json) => setApiFetch(json));
  }, []);

  // FUNCTIONS
  const refreshPosts = () => {
    window.location.reload();
  };

  const postRequestPotion = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: postFormValue }),
  };
  const postRequest = () => {
    fetch(API_URL, postRequestPotion)
      .then((response) => response.json())
      .then((data) => setApiFetch([...apiFetch, data]));
  };

  return (
    <Grid container spacing={1} justify="center">
      <Grid item xs={12}>
        <PostForm
          postFormValue={postFormValue}
          setPostFormValue={setPostFormValue}
          postRequest={postRequest}
          refreshPosts={refreshPosts}
        />
      </Grid>
      <Grid item xs={12}>
        {apiFetch.map((post) => (
          <Post
            key={post._id}
            message={post.message}
            likes={post.hearts}
            timeStamp={post.createdAt}
          />
        ))}
      </Grid>
    </Grid>
  );
};
