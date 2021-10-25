import React, { useEffect, useState } from "react";
import moment from "moment";

import { API_URL } from "./utils/urls";

export const App = () => {
  const [post, setPost] = useState([]);
  const [newPost, setNewPost] = useState("");

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);

  console.log(post);

  const onSubmitForm = (event) => {
    event.preventDefault();

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: newPost }),
    };

    fetch(API_URL, options)
      .then((res) => res.json())
      .then((data) => setPost([data, ...post]));
  };

  const onNewPostChange = (event) => {
    setNewPost(event.target.value);
  };

  // const SendLike = (id) => {
  //   const options = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   };

  //   fetch(
  //     API_URL_LIKE(id),
  //     options
  //   )
  //     .then((res) => res.json())
  //     .then((data) => setLike([data, ...like]));
  // };

  return (
    <div>
      <form className="container" onSubmit={onSubmitForm}>
        <label htmlFor="thought" className="thought">
          What's making you happy right now?
        </label>
        <input
          required
          minLength="5"
          maxLength="140"
          id="thought"
          type="text"
          value={newPost}
          onChange={onNewPostChange}
        />
        <button type="submit">Send Happy Thought</button>
      </form>

      {/* <NewPost
        newPost={newPost}
        submitForm={SubmitForm}
        onNewPostChange={onNewPostChange}
      /> */}

      <div>
        {post.map((thought) => (
          <div key={thought._id} className="container">
            <p className="message">{thought.message}</p>
            <div className="inner-container">
              <div>
                <button
                  onClick={() => {
                    const options = {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                    };
                    fetch(
                      `https://happy-thoughts-technigo.herokuapp.com/thoughts/${thought._id}/like`,
                      options
                    )
                      .then((res) => res.json())
                      .then((data) => console.log(data));
                  }}
                  className="like"
                >
                  <span className="hearts">&hearts;</span>
                </button>
                x {thought.hearts}
              </div>
              <div> {moment(thought.createdAt).fromNow()}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
