import React from 'react';

const CreatePost = ({ handleSubmitPosts, newPost, setNewPost, id }) => {
  return (
    <form onSubmit={handleSubmitPosts} key={id}>
      <div className="main-post">
        <h1>What is making you happy right now?</h1>
        <div>
          <textarea
            type="text"
            id="textarea"
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)} />
        </div>
        <div>
          <button
            type="submit"
            className="new-post-button"
            disabled={newPost.length < 6 || newPost.length > 140}>
           ❤️ Send happy thought ❤️
          </button>
        </div>
      </div>
    </form>
  )
}

export default CreatePost;