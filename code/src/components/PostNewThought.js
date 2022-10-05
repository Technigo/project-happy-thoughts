import React from 'react'

const PostNewThought = ({
  onFeedSubmit,
  setCounterValue,
  newThought,
  setNewThought
}) => {
  const updateBtn = () => {
    window.location.reload('Refresh')
  }
  return (
    <div className="send-wrapper">
      <span />
      <div>
        <form
          onSubmit={
            ((e) => setCounterValue(e.target.value.length), onFeedSubmit)
          } />
      </div>
      <section>
        <p className="message-header">What is making you happy right now?</p>
      </section>
      <textarea
        rows="4"
        id="newThought"
        type="text"
        placeholder="...what's on your heart?"
        value={newThought}
        onChange={(e) => setNewThought(e.target.value)} />

      <p className="letter-counter">{140 - newThought.length} / 140</p>
      <div className="buttons">
        <button
          className="send-button"
          disabled={newThought.length < 1 || newThought.length > 140}
          type="submit"
          onClick={onFeedSubmit}>
          <span> <span className="heart" role="img" aria-label="heart"> 🤍 </span> Send happy thought <span className="heart" role="img" aria-label="heart"> 🤍 </span></span>
        </button>

        <button type="button" className="update-button" value="refresh" onClick={updateBtn}> Update</button>
      </div>
    </div>
  )
}
export default PostNewThought;
