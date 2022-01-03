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
        {/* Did a errorState that activates a dic saying that some kind of error occured */}
        {errorState && (
          <div>Some kind of error occured, please try again later.</div>
        )}
        <label htmlFor="inputThought">What makes you happy right now?</label>
        <textarea
          value={newThought}
          onChange={(event) => {
            onSetNewThought(event.target.value);
          }}
          type="text"
          id="inputThought
        "
          rows="5"
        ></textarea>
        <span
          // Added a if/else statement to the lenght of NewThought to change the color depending on the amount of characters.
          style={{
            color:
              newThought.length > 4 && newThought.length < 141
                ? "black"
                : "red",
          }}
        >
          {newThought.length} / 140 characters
        </span>
        {/* Disabeled the button if it was less then 4 characters or more then 140 */}
        <button
          className="submit-button"
          disabled={newThought.length < 5 || newThought.length > 140}
        >
          <FontAwesomeIcon icon={faHeart} className="icon__heart--red" />
          Send Happy Thought
          <FontAwesomeIcon icon={faHeart} className="icon__heart--red" />
        </button>
        {/* Made a likedPostValue that stores how many likes the user have given. */}
        <span
          className="liked-post-value"
          title="Amount of likes given on posts"
        >
          You have liked a post {likedPostValue} times!
        </span>
      </form>
    </>
  );
};
