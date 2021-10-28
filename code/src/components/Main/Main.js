import React, { useState, useEffect } from "react";
import "./Main.css";
import { ThoughtsList } from "../ThoughtsList/ThoughtsList";
import { PostNewThought } from "../PostNewThought/PostNewThought";
import { API_ThoughtList, POST_Like } from "utils/urls";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

export const Main = () => {
  const [thoughtList, setThoughtList] = useState([]);
  const [likedPostValue, setLikedPostValue] = useState(0);
  const [newThought, setNewThought] = useState("");
  const [errorState, setErrorState] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchThoughts = () => {
    setLoading(true);
    fetch(API_ThoughtList)
      .then((res) => res.json())
      .then((data) => setThoughtList(data))
      .finally(() => setTimeout(() => setLoading(false), 500));
  };

  useEffect(() => {
    fetchThoughts();
  }, [setThoughtList]);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: newThought }),
    };

    fetch(API_ThoughtList, options)
      .then((res) => res.json())
      .then(() => {
        setErrorState(false);
        fetchThoughts();
        setNewThought("");
      })
      .catch(() => {
        setErrorState(true);
      });
  };

  const postALike = (id) => {
    const options = {
      method: "POST",
    };

    fetch(POST_Like(id), options)
      .then((res) => res.json())
      .then(() => {
        fetchThoughts();
      })
      .catch(() => {});
  };

  return (
    <div className="wrapper">
      {loading && (
        <div className="spinner__container">
          <ClipLoader color={"black"} loading={true} size={150} />
        </div>
      )}

      {!loading && (
        <>
          <PostNewThought
            likedPostValue={likedPostValue}
            onFormSubmit={handleFormSubmit}
            errorState={errorState}
            onSetNewThought={setNewThought}
            newThought={newThought}
          />
          <ThoughtsList
            onFetchThoughts={fetchThoughts}
            thoughtList={thoughtList}
            likedPostValue={likedPostValue}
            onSetLikedPostValue={setLikedPostValue}
            onPostALike={postALike}
          />
        </>
      )}
    </div>
  );
};
