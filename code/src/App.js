import React, {useState, useEffect} from 'react'
import moment from 'moment'
import {Form} from './components/Form'

export const App = () => {

  const API_URL = 'https://happy-thoughts-technigo.herokuapp.com/thoughts';

  /*useState, saves data. 
  Why is state an empty array? are we going to put messages in there?
  Are we creating an array and later we will put things in it?
  if useState() is empty it gives underfined*/
  const [message, setMessage] = useState([])
 


  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      /*json is an array with 20 object in it, 
      here we passing json object to setMessage function. So now state is updated
      and message has a value of json object?*/
      .then((json) => setMessage(json))

  }, []);



  return (
     <div>
      <Form apiUrl={API_URL} message={message}/> 
     {message.map((messageObj) => ( 
       <div key={messageObj._id}>
         <p>{messageObj.message}</p>
         <button key={messageObj}>&#x2665; {messageObj.hearts}</button>
         {/*Formation date object with help of moment.js library*/}
         <p className="date">Created at: {moment(messageObj.createdAt).fromNow()}</p>
       </div>
       ))}
     </div>

  );
};
