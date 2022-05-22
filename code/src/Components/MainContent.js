import React, { useState, useEffect } from 'react';
import { HappyMessages } from "Components/HappyMessages";
import { Form } from "Components/Form";

export const MainContent = () => {
  const [twentyThoughts, setTwentyThoughts] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    fetchTwentyThoughts();
   }, []); //when mounted

  const fetchTwentyThoughts = () => {
    fetch('https://send-happy-thought-api.herokuapp.com/thoughts')
      .then(res => res.json())
      .then(data => setTwentyThoughts(data));
      }

      const handleNewMessageChange = (event) => {
        setNewMessage(event.target.value)
    }

      const onFormSubmit = (event) => {
        event.preventDefault();
        
        const options =  {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                //our messages space suit
                message: newMessage
            })
        }
        
        fetch('https://send-happy-thought-api.herokuapp.com/thoughts', options)
            .then(res => res.json()) //space suit
            .then(() => fetchTwentyThoughts()) //refetch data, make sure the message is posted without having to refresh 
            // data => console.log(data)
            .finally(() => setNewMessage('')); //removes the happy thought from the form
          }

          // the amount of heart-likes are updated in the API element 'hearts' så what we do is fetch again after we clicked and 
          // increased it and with id we target that exact heart-like they clicked on
  const handleHearts = (_id) => {

    const options =  {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
    }
  
          fetch(`https://send-happy-thought-api.herokuapp.com/thoughts/${_id}/like`, options)
          .then(res => res.json())   
          .then(() => fetchTwentyThoughts())
        }
 
  return ( 
    <main className="main-container">
        <Form 
        newMessage={newMessage}
        onNewMessage={handleNewMessageChange} //onNewMessage defined in Form onChange
        onFormSubmit={onFormSubmit}
        />

        {twentyThoughts.map(twentyThoughts => (
        <HappyMessages
          key={twentyThoughts._id}
          twentyThoughts={twentyThoughts}
          handleHearts={handleHearts}
        />
         ))}
    </main>
  )
  }

  export default MainContent;
  