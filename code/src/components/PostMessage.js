import React from 'react'

import { HAPPY_THOUGHTS_API } from '../reusable/urls'

const PostMessage = ({ messageNew, setMessageNew, messageList, setMessageList, chars, setChars }) => {

  const onMessageNewChange = (event) => {
    setMessageNew(event.target.value)
    setChars(event.target.value.length)
  }

  const fetchMessageList = () => {
    fetch(HAPPY_THOUGHTS_API)
      .then(response => response.json())
      .then(messages => setMessageList(messages))
      .catch(err => console.error(err))
  }

  const onFormSubmit = (event) => {
    event.preventDefault()

    const postArgument = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: messageNew })
    }

    fetch(HAPPY_THOUGHTS_API, postArgument)
      .then(response => response.json())
      .then(() => {
        setMessageNew('')
        fetchMessageList()})
  }

  return (
    <article className="message-container form-container">
      <form className="post-message-form" onSubmit={onFormSubmit}>
        <label htmlFor="newMessage"><h3 className="post-message-label">What's making you happy right now?</h3></label>
        <textarea className="post-message-textarea" 
          id="newMessage"
          placeholder="Write your happy thought.."
          //type="text-area"
          value={messageNew}
          onChange={onMessageNewChange}
          />
        <div className="btn-container">
          <button className="post-message-btn" type="submit"><span className="heart-emoji" role="img" aria-label="heart-emoji">❤️</span> Send happy thought <span className="heart-emoji" role="img" aria-label="heart-emoji">❤️</span></button>
          <p>{chars}/150</p>
        </div>
      </form>
    </article>
  )

}
export default PostMessage