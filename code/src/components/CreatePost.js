import React from 'react';

const CreatePost = ({ onFormSubmit, handleCreatePost, newPost }) => {
  return (
    <form onSubmit={onFormSubmit}>
      <div className="main-post">
        <h1>What is making you happy right now?</h1>
        <div>
          <textarea
            type="text"
            id="textarea"
            className={newPost.length > 140 ? 'long-textarea' : 'textarea'}
            value={newPost}
            onChange={handleCreatePost} />
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