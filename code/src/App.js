import React, { useEffect, useState } from "react";
import NewPost from "components/NewPost";
import Posts from "components/Posts";
import Loading from "components/Loading";

import { API_URL, LIKE_URL } from "./utils/urls";

export const App = () => {
  const [post, setPost] = useState([]);
  const [newPost, setNewPost] = useState("");
  const [newUser, setNewUser] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    setLoading(true);
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setPost(data.message))
      .finally(() => setLoading(false));
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: newPost,
        user: newUser,
      }),
    };

    fetch(API_URL, options)
      .then((res) => res.json())
      .then((data) => {
        if (data.errors) {
          alert("Message must be between 5 and 140 characters long");
        } else fetchPosts();
      })
      .catch((err) => console.err(err));

    setNewPost("");
  };

  const handleNewPostChange = (event) => setNewPost(event.target.value);
  const handleNewUserChange = (event) => setNewUser(event.target.value);

  const handleSendLike = (postId) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(LIKE_URL(postId), options)
      .then((res) => res.json())
      .then(() => {
        fetchPosts();
      });
  };

  return (
    <div>
      {loading && <Loading />}
      <NewPost
        newUser={newUser}
        newPost={newPost}
        onSubmitForm={handleSubmitForm}
        setNewPost={handleNewPostChange}
        setNewUser={handleNewUserChange}
      />

      {post.map((thought) => (
        <Posts
          key={thought._id}
          thought={thought}
          onSendLike={handleSendLike}
        />
      ))}
    </div>
  );
};
