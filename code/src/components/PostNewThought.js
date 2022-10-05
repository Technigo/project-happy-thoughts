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
        <p>What is making you happy right now?</p>
      </section>
      <textarea
        rows="4"
        id="newThought"
        type="text"
        placeholder="begin sharing positive"
        value={newThought}
        onChange={(e) => setNewThought(e.target.value)} />

      <p className="letter-counter">{140 - newThought.length} / 140</p>
      <button
        className="send-button"
        disabled={newThought.length < 1 || newThought.length > 140}
        type="submit"
        onClick={onFeedSubmit}>
        <span>Send</span>
      </button>

      <button type="button" className="update-button" value="refresh" onClick={updateBtn}> Update</button>
    </div>
  )
}
export default PostNewThought;
