import React from 'react'

import { POST_API } from '../reusables/urls'

export const NewThoughts = ({ newMessage, setNewMessage, messageList, setMessageList }) => {

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
    
        fetch(POST_API, options)
          .then(res => res.json())
          .then((newThoughts) => {
              setMessageList ((messageList)=> [newThoughts,...messageList])
          })
          .catch(error => console.error(error))
      }

      return (
        <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor='newMessage'>New message</label>
            <input
              id='newMessage'
              type='text'
              value={newMessage}
              onChange={onNewMessageChange}
            />
            <button type='submit'>Post message</button>
          
        </form>
        </div>
      )
}