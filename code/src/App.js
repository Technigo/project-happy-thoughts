import React, { useState, useEffect } from 'react';
import { HappyMessages } from "Components/HappyMessages";
import { Form } from "Components/Form";

export const App = () => {
  const [twentyThoughts, setTwentyThoughts] = useState([]);
   const [loading, setLoading] = useState(false);

  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    fetchTwentyThoughts();
   }, []); //when mounted


  const fetchTwentyThoughts = () => {
    setLoading(true);
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
      .then(res => res.json())
      .then(data => setTwentyThoughts(data))
          .finally(() => setLoading(false));
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
        
        fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts', options)
            .then(res => res.json()) //space suit
            .then(() => fetchTwentyThoughts()) //refetch data, make sure the message is posted without having to refresh 
            // data => console.log(data)
            .finally(() => setNewMessage(''));
          }
 
  return ( 
    <>
        <Form 
        newMessage={newMessage}
        onNewMessage={handleNewMessageChange} //onNewMessage defined in Form onChange
        onFormSubmit={onFormSubmit}
        />

        {twentyThoughts.map(twentyThoughts => (
        <HappyMessages
          key={twentyThoughts._id}
          twentyThoughts={twentyThoughts}
          loading={loading}
        />
         ))}
    </>
  )
  }

  export default App;