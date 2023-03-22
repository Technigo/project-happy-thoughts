import React from 'react';

const CreatePost = ({ handleSubmitPosts, newPost, setNewPost, id }) => {
  return (
    <form onSubmit={handleSubmitPosts} key={id}>
      <div>
        <p>What is making you happy right now?</p>
      </div>
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
          className="button"
          disabled={newPost.length < 6 || newPost.length > 140}>
            Send happy thought!
        </button>
      </div>
    </form>
  )
}

export default CreatePost;