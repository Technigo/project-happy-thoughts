import React, { useState } from "react";
import { API_URL } from "utils/urls";

/*  a form/text-input where you can type a message, a button where you send a post request to send a new message and save that thought in the api.

You can set the state to an empty string after the message is sent with fetch with something like this: setNewThought("")
*/

export const NewThought = () => {
  const [thoughts, setThoughts] = useState([]);
  const [newThought, setNewThought] = useState("");
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

  return (
    <div>
      <form className="newThoughtWrapper" onSubmit={onFormSubmit}>
        {" "}
        <label htmlFor="newThought">What's making you happy right now?</label>
        <textarea
          id="newThought"
          type="text"
          value={newThought}
          maxLength="140"
          onChange={(event) => setNewThought(event.target.value)}
        />
        <p
          className="charactersLeft"
          // the style in line 44 conditions that if the newThought is longer than 130 characters, the text will be red, but if its 130 or less, it will be black. line 46 subtracts the number of characters from the max length, which is 140.
          style={{ color: newThought.length > 130 ? "red" : "black" }}
        >
          {140 - newThought.length} characters left
        </p>
        <button type="submit" className="sendThought">
          <span role="img" aria-label="heart emoji">
            💗
          </span>{" "}
          Send happy thought!{" "}
          <span role="img" aria-label="heart emoji">
            💗
          </span>{" "}
        </button>
      </form>
    </div>
  );
};

export default NewThought;
