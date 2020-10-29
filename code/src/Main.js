import React, { useState, useEffect } from "react";

import HappyForm from "./HappyForm"
import HappyThougthList from "./HappyThougthList";



const Main = () => { 
const [thoughts, setThoughts] = useState([]); 

const THOUGTHS_URL ="https://happy-thoughts-technigo.herokuapp.com/thoughts";

    useEffect(() => {
        fetchThougths();
    }, []);  

    const fetchThougths = () => {
        fetch(THOUGTHS_URL )
        .then ((response) => {
            return response.json()
        })
        .then (data => {
            const filteredThoughts = data.filter(thought => {
                return thought !== '';
            })
            setThoughts (filteredThoughts)
        })
    }
      

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


