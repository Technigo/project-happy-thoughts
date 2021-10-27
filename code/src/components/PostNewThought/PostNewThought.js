import React, { useState } from "react";
import "./PostNewThought.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export const PostNewThought = ({
  API_URL,
  onSetThoughtList,
  thoughtList,
  likedPostValue,
}) => {
  const [newThought, setNewThought] = useState("");
  const [inputValue, setInputValue] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: newThought }),
    };

    fetch(API_URL, options)
      .then((res) => res.json())
      .then((data) => {
        if (data.errors) {
          console.log("Something is wrong");
        } else {
          console.log("hello", data);
          onSetThoughtList([data, ...thoughtList]);
          setNewThought("");
        }
      });
  };

  return (
    <form onSubmit={onFormSubmit}>
      <label htmlFor="inputThoughts">What makes you happy right now?</label>
      <input
        value={newThought}
        onChange={(event) => {
          setNewThought(event.target.value);
          setInputValue(event.target.value.length);
        }}
        type="text"
        id="inputThoughts"
      ></input>
      <span
        style={{
          color: inputValue > 4 && inputValue < 141 ? "black" : "red",
        }}
      >
        {newThought.length} / 140 characters
      </span>
      <div className="container__button-like-post-value">
        <button
          className="submit-button"
          disabled={inputValue < 5 || inputValue > 140}
        >
          <FontAwesomeIcon icon={faHeart} className="icon__heart--red" />
          Send Happy Thougth
          <FontAwesomeIcon icon={faHeart} className="icon__heart--red" />
        </button>
        <span
          className="liked-post-value"
          title="Amount of likes given on posts"
        >
          {likedPostValue}
        </span>
      </div>
    </form>
  );
};
