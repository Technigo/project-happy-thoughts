import React, { useEffect, useState } from "react";

import { NewPost } from "./components/NewPost";
import Posts from "./components/Posts";
import { API_URL } from "./utils/urls";
// import { LIKES_URL } from "./utils/urls";

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [newThought, setNewThought] = useState("");

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setThoughts(data));
  }, []);

  const onFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: newThought }),
    };

    fetch(API_URL, options)
      .then((res) => res.json())
      .then((data) => setThoughts([data, ...thoughts]));
  };

  // const likePost = {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.
  // };

  return (
    <div>
      <NewPost
        onFormSubmit={onFormSubmit}
        newThought={newThought}
        setNewThought={setNewThought}
      />
      <Posts thoughts={thoughts} />
      {/* {thoughts.map((thought) => (
        <div key={thought._id} className="post-container">
          <p>{thought.message}</p>
          <div className="like-div">
            <button className="heart-button">
              <span role="img" aria-label="heart icon">
                💗
              </span>
            </button>
            x{thought.hearts}
          </div>
          <p className="date">{moment(thought.createdAt).fromNow()}</p>
        </div>
      ))} */}
    </div>
  );
};
