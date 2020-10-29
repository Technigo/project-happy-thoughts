// import React, { useEffect, useState } from 'react'
// // import { useEffect } from "react"
// import moment from 'moment';

// export const MessageList = () => {
//     // It's good to put your URLs in constants
//   const MESSAGES_URL = "https://happy-thoughts-technigo.herokuapp.com/thoughts";
//   const [messages, setMessages] = useState([]);
//         // Ask the server for the messages using a GET requests
//   useEffect (()=> {
//     fetch(MESSAGES_URL)
//       .then((res) => {
//         // Get the JSON of the response body
//         return res.json()
//       })
//       .then((data) => {
//       // Set the state based on the response
//         console.log(data);
//         const filteredMessages = data.filter((message) => message.message); 
//         const limitedMessages = filteredMessages.slice(0,10);
//         setMessages(limitedMessages);
//       });
// },[]); 
  
//   return (
//   <div> 
//     {messages.map((message) => {
//       return <p className="messsage" key={message._id}>
//                 {message.message}
//                 <span className="message-time"> 
//                 {moment(message.createdAt).fromNow()}
//                 </span>
//             </p> 
//     })}
//     </div>
//   );  
// };