//This component is from Van's lecture and is not going to be used as it is now.
//New component is HappyThought (and also changes in the App-component)
import React, { useEffect, useState } from 'react'
import moment from 'moment'

import './HappyList.css'

const HappyList = ({ messageList }) => {
// What I want to do inside HappyList 
// (which is simply a list of happy thoughts):
// 1. Create state for messages
// const MESSAGES_URL = "https://happy-thoughts-technigo.herokuapp.com/thoughts";
// const [messages, setMessages] = useState([]); //Square brackets because: array

// 2. Use useEffect to fetch messages from backend 
//( = a function that triggers when state changes occur, and then a re-render is performed)
//use effects accepts a function as the first argument, and an array of dependencies 
//as a second argument, so adding an empty array as a second argument means that 
// //it will run when the component loads the first time.
// useEffect(() => { 
//   //Fetch from backend API
//   fetch(MESSAGES_URL)
//   .then(response => {
//     return response.json();
//   })
  //Set the state (data is an array of messeges)
//   .then(data => {
//     //Filter out messages that don't have any text:
//     const filteredData = data.filter(message => {
//       return message.message;
//     });
//     //Sort the data based on date using reverse (could also use sort for this):
//     //(removed this because list already shows latest message first).
//     //filteredData.reverse();
//     setMessages(filteredData);
//     console.log(data)
//   });
// }, []);

// 3. Render messages using map 
  return (
    <section className="happy-post-container">
      {
        messageList.map(message => (
          <article className="happy-post" key={message._id}> 
            <p className="happy-message" >
              {message.message}
              <span className="message-time">
                {moment(message.createdAt).fromNow()}
              </span>
            </p>
          </article>
        ))
      }
    </section>
  )
};
export default HappyList;