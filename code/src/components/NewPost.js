import React from "react";

const NewPost = ({ newPost, onSubmitForm, setNewPost }) => {
  const characters = newPost.length;
  return (
    <form className="container" onSubmit={onSubmitForm}>
      <label htmlFor="thought" className="thought">
        What's making you happy right now?
      </label>
      <textarea
        cols="35"
        rows="4"
        id="thought"
        value={newPost}
        onChange={setNewPost}
      />
      <div className="button-container">
        <button className="submit" type="submit">
          <span className="hearts">&hearts;</span>
          Send Happy Thought
          <span className="hearts">&hearts;</span>
        </button>
        <div
          className="characters-left"
          style={characters > 140 ? { color: "red" } : {}}
        >
          {characters}/140
        </div>
      </div>
    </form>
  );
};

export default NewPost;
