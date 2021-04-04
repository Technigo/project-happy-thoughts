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
  }, [apiFetch]);

  // FUNCTIONS
  const postRequest = () => {
    const postRequestOption = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: postFormValue }),
    };

    fetch(API_URL, postRequestOption)
      .then((response) => response.json())
      .then((data) => setApiFetch([...apiFetch, data]));

    setPostFormValue("");
  };

  const handlePostLike = (postID) => {
    const API_LIKE_URL = `https://happy-thoughts-technigo.herokuapp.com/thoughts/${postID}/like`;
    const postRequestOption = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    };

    fetch(API_LIKE_URL, postRequestOption).then((response) => response.json());
  };

  return (
    <Grid container spacing={1} justify="center">
      <Grid item xs={12}>
        <PostForm
          postFormValue={postFormValue}
          setPostFormValue={setPostFormValue}
          postRequest={postRequest}
        />
      </Grid>
      <Grid item xs={12}>
        {apiFetch.map((post) => (
          <Post
            key={post._id}
            postID={post._id}
            message={post.message}
            likes={post.hearts}
            timeStamp={post.createdAt}
            handlePostLike={handlePostLike}
          />
        ))}
      </Grid>
    </Grid>
  );
};
