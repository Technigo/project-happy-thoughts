import React, { useState, useEffect } from "react";

import HappyForm from "./HappyForm"
import HappyThougthList from "./HappyThougthList";

import { THOUGTHS_URL } from "./urls"

const Main = () => { 
const [thoughts, setThoughts] = useState([]); 

    useEffect(() => {
        fetchThougths();
    }, []);  

    const fetchThougths = () => {
        fetch(THOUGTHS_URL )
        .then(res => res.json())
        .then(data => setThoughts(data.reverse()))
        .then(data => {
                console.log(data)
                //const filteredThoughts= data.filter(message => message.message );
                //const filteredMessages = data.filter(message => message.message );

                //setThoughts(filteredThoughts);
    })}
    const postSingleMessage = newMessage => {
        fetch(THOUGTHS_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text: newMessage })
        })
          .then(() => fetchThougths())
          .catch(error => console.error(error));
      }

      const onLiked = thoughtId => {

        const updatedThoughts = thoughts.map(thought => {
          if (thought._id === thoughtId) {
            thought.hearts += 1
          }
          return thought
        })
        setThoughts(updatedThoughts)
      }
      

        return(
            <main>
                <HappyForm onMessageChange={postSingleMessage} /> 

                {thoughts.map((thought) => (
                <HappyThougthList 
                 key={thought._id}
                 thought={thought}
                 onLiked={onLiked} />
                    ))}
            </main>
    )}
   
   
export default Main;

//<List  messages={messages} setMessages ={setMessages}  /> 


