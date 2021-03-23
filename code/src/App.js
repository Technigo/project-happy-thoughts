import React, { useState, useEffect} from 'react'
import moment from 'moment';

import { API_URL } from './reusable/url'

export const App = () => {
  const [messageList, setMessageList] = useState([])
  const [newMessage, setNewMessage] = useState('')
  // const [heart, setHeart] = useState (0)

  useEffect(() => {//when mounted or when unmounted
    fetchMessageList()
  }, []) // If it should always be called we do not set a second argument with a comma , 

  const fetchMessageList = () => {
    fetch(API_URL)
      .then(res => res.json())
      .then(messages => setMessageList(messages))
      .catch(err => console.error(err));
  
  }

  const onNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  }

  const onFormSubmit = (event) => {
    event.preventDefault(); //if i comment this out my message will not be sent
     
    fetch(API_URL, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: newMessage }) 
    })
    .then((res) => res.json ()) //what happens here, object text showing in input field, messages are not updating in real time
    .then((messageList) =>{
      setMessageList((previousMessage) => [messageList, ...previousMessage])
    })
  }

  return (
    <div className="form-wrapper">
       <form onSubmit={onFormSubmit}> {/*why a form? is it due to a submit button?  */}
        <div className="send-message-card">What makes you happy right now
          <div>
            <label htmlFor="newMessage"></label>
            <input
              className="input-field"
              placeholder="Your happy thoughts here"
              id="newMessage"
              type="text"
              value={newMessage}
              onChange={onNewMessageChange}
            >
            </input>
          </div>
          <button className="submit-button"type="submit">&hearts;  Upload happiness &hearts;</button>
        </div>
      </form>
      {messageList.map(text => (  // add reverse() after .map if reverse order of messages. 
       <div key={text._id}>
         <h4 className="GET-message">{text.message}</h4>
         <p className="date">&#9716; {moment(text.createdAt).fromNow()}</p>
       </div>
      ))}
      {/* <form onSubmit={onFormSubmit}>
        <label htmlFor="newMessage"></label>
        <input
          placeholder="&hearts; Your happy thoughts here &hearts;"
          id="newMessage"
          type="text"
          value={newMessage}
          onChange={onNewMessageChange}
        >
        </input>
        <button type="submit">Upload thought</button>
      </form> */}
    </div>
    
  )
}
