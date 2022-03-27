import React from "react";
import Characters from "./Characters";

const SendThought = ({ onFormSubmit, newThought, setNewThought }) => {
  const checkKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      onFormSubmit(e);
      setNewThought("");
      //this clears textarea and is in the onChange
    }
  };

  const emptyTextarea = (value) => value.replace(/\s/g, "").length === 0;
  //this disables the submit button so you can't send empty messages

  return (
    <form onSubmit={onFormSubmit}>
      <section className="form-container">
        <label htmlFor="newThought">What's making you happy right now?</label>
        <textarea
          id="newThought"
          type="text"
          value={newThought}
          onKeyDown={(e) => checkKey(e)}
          onChange={(e) => setNewThought(e.target.value)}
        ></textarea>
        <div className="btn-container">
          <button
            className="submit-btn"
            type="submit"
            disabled={
              newThought.length < 5 ||
              newThought.length > 140 ||
              emptyTextarea(newThought)
            }
          >
            <div>
              <span>
                <span className="emoji" role="img" aria-label="heart">
                  ❤️
                </span>

                <p>Send Happy Thought</p>

                <span className="emoji" role="img" aria-label="heart">
                  ❤️
                </span>
              </span>
            </div>
            <div>
              <span>
                <p>Thanks For Sharing</p>
                <span className="emoji" role="img" aria-label="letter">
                  💌
                </span>
              </span>
            </div>
          </button>
          <Characters counter={newThought.length} />
        </div>
      </section>
    </form>
  );
};

export default SendThought;
