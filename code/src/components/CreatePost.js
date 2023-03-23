import React from 'react';

const CreatePost = ({ handleSubmitPosts, newPost, setNewPost, id }) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmitPosts();
    }
  };
  return (
    <form onSubmit={handleSubmitPosts} key={id}>
      <div className="main-post">
        <h1>What is making you happy right now?</h1>
        <div>
          <textarea
            type="text"
            id="textarea"
            className={newPost.length > 140 ? 'long-textarea' : 'textarea'}
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            onKeyDown={handleKeyDown} />
        </div>
        <p className="character-counter">Characters: {newPost.length} / 140</p>
        <div>
          <button
            type="submit"
            className="new-post-button"
            disabled={newPost.length < 5 || newPost.length > 140}>
           ❤️ Send happy thought ❤️
          </button>
        </div>
      </div>
    </form>
  )
}

export default CreatePost;