// import { MessageList } from 'MessageList';
// import React, { useState } from 'react'

// export const MessageInput = props => {
//     const MESSAGES_URL = "https://happy-thoughts-technigo.herokuapp.com/thoughts";
// //state to save the message
//     const [message, setMessage] = useState("");
// //function that handles submit of the input text
//     const handleSubmit = event => {
// //prevent default page refresh
//         event.preventDefault();
// //send a POST request using the message state
//         fetch(MESSAGES_URL,
//             {
//                 method: "POST",
//                 headers: {
//                 "Content-type" : "application/json"
//                 },
//                 body: JSON.stringify({message})
//             }
//         ).then(()=>{
//           //refresh the page when a new message is added
//             window.location.reload(); //what is the difference?
//             //set the input box to empty
//             setMessage("");
//             //what does this do??
//             props.onFormSubmit(message)
//         })
//         .catch(err => console.log("error:",err))
//   };
  
//   return (
//     <>
//       {/* <form onSubmit={handleSubmit}> this is when the form is input not textarea */}
//          {/* //input text field */}
//       <form className="form-thoughts">
//         <p>Post a happy thought here!</p>
//         <textarea
//           // this create space for typing
//             rows="3"
//             value={message}
//             onChange={event => setMessage(event.target.value)}
//         ></textarea>
//           {/* input submit button */}
//           <div className="form-submit">
//             <button
//               type="submit"
//               className="form-button"
//               onClick={handleSubmit}
//               disabled={message.length < 6 || message.length > 140 ? true : false}
//             >Send a happy though</button>
//             <p>{message.length} / 140</p>
//           </div>
//     </form>
//     </>
//   )
// }





// export const MessageInput = () => {
//     const MESSAGES_URL = "https://happy-thoughts-technigo.herokuapp.com/thoughts";
//     const [message, setMessage] = useState("");

//     const handleSubmit = event => {
//         // Prevent page from refreshing automatically
//         event.preventDefault()

//         // Post the current value of the text input to the server
//         fetch(MESSAGES_URL,
//             {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 // Send the JSON as a string -- object does not work here
//                 body: JSON.stringify({ message: message })
//             }
//         ).then(()=>{
//             // Reload the page after the request is complete
//             window.location.reload();
//         });
//     }

//     return (
//         <form onSubmit={handleSubmit}>
//             <input 
//                 type="text" 
//                 onChange={event => setMessage(event.target.value)}
//                 className="form-text">
//             </input>
//             <input 
//                 type="submit"
//                 className="form-button"
//                 value="Add Message">
//             </input>
//         </form>
//     )
// }