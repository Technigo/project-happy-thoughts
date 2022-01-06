import React, { useCallback, useEffect, useState } from "react";
import NewPost from "components/NewPost";
import Posts from "components/Posts";
import Loading from "components/Loading";

import { API_URL, LIKE_URL } from "./utils/urls";
import Pagination from "components/Pagination";

export const App = () => {
  const [post, setPost] = useState([]);
  const [newPost, setNewPost] = useState("");
  const [newUser, setNewUser] = useState("");
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(5);
  const [loading, setLoading] = useState(false);

  const fetchPosts = useCallback(() => {
    setLoading(true);
    fetch(`${API_URL}?page=${page}&perPage=${perPage}`)
      .then((res) => res.json())
      .then((data) => setPost(data.message))
      .finally(() => setLoading(false));
  }, [page, perPage]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

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
    setNewUser("");
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

  const nextPage = () => {
    setPage(page + 1);
  };

  const previousPage = () => {
    setPage(page - 1);
  };

  const handlePerPageChange = (event) => setPerPage(event.target.value);

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
      <Pagination
        perPage={perPage}
        setPerPage={handlePerPageChange}
        nextPage={nextPage}
        previousPage={previousPage}
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
