import React, { useState, useEffect } from "react";
import "./Main.css";
import { ThoughtsList } from "../ThoughtsList/ThoughtsList";
import { PostNewThought } from "../PostNewThought/PostNewThought";
import { API_ThoughtList, POST_Like } from "utils/urls";
import ClipLoader from "react-spinners/ClipLoader";

export const Main = () => {
  const [thoughtList, setThoughtList] = useState([]);
  const [likedPostValue, setLikedPostValue] = useState(
    Number(localStorage.getItem("likedPostValue"))
  );
  const [newThought, setNewThought] = useState("");
  const [errorState, setErrorState] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingLike, setLoadingLike] = useState({ id: "", loading: false });

  // this function set loading to true and then fetch the api data and update it through setThoughtList.

  const fetchThoughts = () => {
    fetch(API_ThoughtList)
      .then((res) => res.json())
      .then((data) => setThoughtList(data));
  };

  //The useEffect calls for the fetchThoughts function everytime the component is mounted.
  //I also did a setTimout throughtout the project just to see the loading spinners better.
  useEffect(() => {
    setLoading(true);
    localStorage.setItem("likedPostValue", 0);
    fetchThoughts();
    setTimeout(() => setLoading(false), 500);
  }, []);

  // This function sets event.prevent Default and then fetches the Thoughtlist with the options
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
        setLoading(true);
        setErrorState(false);
        fetchThoughts();
        setNewThought("");
      })
      .catch(() => {
        setErrorState(true);
      })
      .finally(() => setTimeout(() => setLoading(false), 500));
  };

  // This function expects a id to be sent in to be able to update the likes on a post.
  const postALike = (id) => {
    setLoadingLike({ id: id, loading: true });
    const options = {
      method: "POST",
    };

    fetch(POST_Like(id), options)
      .then((res) => res.json())
      .then(() => {
        fetchThoughts();
      })
      .catch(() => {})
      .finally(() => {
        setTimeout(() => setLoadingLike({ id: id, loading: false }), 300);
      });
  };

  // if the state loading is true the spinner is only shown.
  return (
    <div className="wrapper">
      <PostNewThought
        likedPostValue={likedPostValue}
        onFormSubmit={handleFormSubmit}
        errorState={errorState}
        onSetNewThought={setNewThought}
        newThought={newThought}
      />
      {loading && (
        <div className="spinner__container">
          <ClipLoader color={"black"} loading={true} size={150} />
        </div>
      )}

      {/* if the state loading is not true the other content is shown.  */}

      {!loading && (
        <>
          <ThoughtsList
            loadingLike={loadingLike}
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
