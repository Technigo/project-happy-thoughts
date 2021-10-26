import React, { useState } from "react";
import { API_URL } from "utils/urls";

const Form = () => {
  const [newThought, setNewTought] = useState("");

  const formSubmit = (event) => {
    event.preventDefaul();

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: newThought }),
    };

    // fetch(API_URL, options)
    //   .then((res) => res.json())
    //   .then((data) => setThoughts([data, ...thoughts]));
  };
  console.log("new thoughts", newThought);

  return (
    <div className="form-wrapper">
      <form onSubmit={formSubmit}>
        <label htmlFor="newThought">What's making you happy right now?</label>
        <input
          id="newThought"
          type="text"
          value={newThought}
          onChange={(e) => setNewTought(e.target.value)}
        />
        <button className="form-button" type="submit">
          &hearts; Send Happy Thought &hearts;
        </button>
      </form>
    </div>
  );
};

export default Form;
