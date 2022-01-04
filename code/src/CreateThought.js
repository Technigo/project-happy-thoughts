import React from "react";

const CreateThought = ({ handleSubmitMessages, message, setMessage }) => {
  return (
    <form className="messageContainer" onSubmit={handleSubmitMessages}>
      <div className="contentTextArea">
        <div>
          <label>What´s making you happy right now?</label>
        </div>

        <div className="TextArea">
          <textarea
            type="text"
            required
            minLength="5"
            maxLength="140"
            value={message}
            onChange={(e) => setMessage(e.target.value, e.target.reset)}
          />
        </div>

        <div className="counterButton">
          <button className="PostBtn">
            {" "}
            <span role="img" aria-label="heart-emoji">
              ❤️ Send Happy Thought ❤️
            </span>
          </button>

          <p className="counterText"> {message.length} / 140 </p>
        </div>
      </div>
    </form>
  );
};

export default CreateThought;
