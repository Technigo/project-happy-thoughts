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
      }

      return (
        <div className='newThoughtsContainer'>
        <form onSubmit={handleSubmit}>
          <label htmlFor='newMessage'>New message</label>
            <input
              id='newMessage'
              type='text'
              value={newMessage}
              onChange={onNewMessageChange}
            />
            <button type='submit'>Send Happy Thought</button>
          
        </form>
        </div>
      )
}