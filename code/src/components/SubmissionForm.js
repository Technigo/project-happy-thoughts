/* eslint-disable linebreak-style */

import React from 'react'

const SubmissionForm = ({ messageNew, onMessageNewChange, onFormSubmit }) => {
  return (
    <form className="form" onSubmit={onFormSubmit}>
      <label htmlFor="newMessage">What's make you happy right now?</label>
      <textarea className={messageNew.length>139 ? "input-error" : "input"}
        id="newMessage"
        type="text"
        rows="5"
        cols="50"
        maxLength="140"
        value={messageNew}
        onChange={onMessageNewChange}
      >    
      </textarea>
      <p className="time-from-now">you can type {140 - messageNew.length} characters more</p>
      <button className="btn-submit" type="submit"><span role="img">💗</span> Send Happy Thought <span role="img">💗</span></button>
    </form>
  )
}

export default SubmissionForm