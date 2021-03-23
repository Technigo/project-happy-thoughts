import React from 'react'

import { API_URL } from '../reusables/urls'

export const NewThoughts = ({ newMessage, setNewMessage,/*  messageList, */ setMessageList }) => {

    const onNewMessageChange = (e) => {
        setNewMessage(e.target.value)

      }
    
      const handleSubmit = (e) => {
        e.preventDefault()
    
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ message: newMessage })
        };
    
        fetch(API_URL, options)
          .then(res => res.json())
          .then((newThoughts) => {
              setMessageList ((messageList)=> [newThoughts,...messageList]) //kan messageList här vara vad som helst?
          })
          .catch(error => console.error(error))

          window.location.reload()
      }

      return (
        <div className='newThoughtsContainer'>
        <form onSubmit={handleSubmit} className='form'>
          <label htmlFor='newMessage' className='newMessage'>What's making you happy right now?</label>
            <textarea
              id='newMessage'
              type='text'
              minlength='5'
              maxlength='140'
              required
              value={newMessage}
              onChange={onNewMessageChange}></textarea>

            <button className='submitButton' type='submit'><span>&#128151;</span> Send Happy Thought <span>&#128151;</span></button>
          
        </form>
        </div>
      )
}