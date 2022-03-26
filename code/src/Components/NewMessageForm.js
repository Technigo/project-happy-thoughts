import React from "react";

const NewMessageForm = ({
  newMessage,
  onMessageSubmit,
  onNewMessageSubmit,
}) => {
  return (
    <div className="form-card">
      <form onSubmit={onNewMessageSubmit}>
        <label htmlFor="inputform" aria-label="inputform">
          <div className="form-heading">
            <h1>What's making you happy right now?</h1>
          </div>
          <textarea
            className="textarea"
            value={newMessage}
            onChange={onMessageSubmit}
            placeholder="im happy about..."
          />
        </label>
        <button type="submit" className="send-message-btn">
          <span className="heart-emoji" role="img" aria-label="Heart-emoji">
            ❤️
          </span>
          Send Happy Thought
          <span className="heart-emoji" role="img" aria-label="Heart-emoji">
            ❤️
          </span>
        </button>
      </form>
    </div>
  );
};

export default NewMessageForm;
