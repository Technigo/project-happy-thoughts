import React from 'react';

const PostMessage = () => {
  return (
    <div className="post-wrapper">
      <h2>What is making you happy right now?</h2>
      <textarea>Pizza</textarea>
      <button type="submit" id="submitPostBtn"><span className="emoji" aria-label="heart emoji">❤️</span> Send Happy Thought <span className="emoji" aria-label="heart emoji">❤️</span></button>
    </div>
  );
};

export default PostMessage;
