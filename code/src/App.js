import React, { useState, useEffect } from 'react'
// import moment from 'moment';
import { API_URL } from './reusable/urls';

export const App = () => {
  const [messageList, setMessageList] = useState([]);
  // const [messageNew, setMessageNew] = useState('')

  useEffect(() => {
    fetchMessageList();
  }, []);

  const fetchMessageList = () => {
    fetch(API_URL)
      .then(res => res.json())
      .then(messages => setMessageList(messages))
      .catch(err => console.error(err));
  }
  

  

  
  // const onMessageNewChange = (event) =>{
  //   setMessageNew(event.target.value);
  // }

  // const onFormSubmit = (event) => {
  //   event.preventDefault();

  //     const options = {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify({ text: messageNew })
  //     };

  //     fetch(API_URL, options)
  //       .then(res => res.json())
  //       .then(receivedMessage => setMessageList([...messageList, recivedMessage]))
  //       .catch(err => console.error(err));
  // }

  return (
    <div>
     
        {messageList.map(message => [
          <div key={message._id}>

         
            <h3>{message.message}</h3>
            
          </div>
        ])}
      
    </div>
  )
}
