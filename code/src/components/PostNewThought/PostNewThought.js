import React from "react";
import "./PostNewThought.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export const PostNewThought = ({
  likedPostValue,
  onFormSubmit,
  errorState,
  onSetNewThought,
  newThought,
}) => {
  return (
    <>
      <form onSubmit={onFormSubmit}>
        {errorState && (
          <div>Some kind of error occured, please try again later.</div>
        )}
        <label htmlFor="inputThought">What makes you happy right now?</label>
        <input
          value={newThought}
          onChange={(event) => {
            onSetNewThought(event.target.value);
          }}
          type="text"
          id="inputThought
        "
        ></input>
        <span
          style={{
            color:
              newThought.length > 4 && newThought.length < 141
                ? "black"
                : "red",
          }}
        >
          {newThought.length} / 140 characters
        </span>
        <div className="container__button-like-post-value">
          <button
            className="submit-button"
            disabled={newThought.length < 5 || newThought.length > 140}
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
    </>
  );
};
