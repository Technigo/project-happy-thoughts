import React, {useState, useEffect} from 'react'

import MessageList from "components/MessageList"
import InputFormContainer from "components/InputFormContainer"

export const App = () => {
  const THOUGHTS_URL = "https://happy-thoughts-technigo.herokuapp.com/thoughts";
  const [thoughts, setThoughts] = useState([]);


  useEffect(() => {
    
    fetch(THOUGHTS_URL)
      .then((res) => res.json())
        .then((json) => {
        // Filter blank messages
          const filteredThoughts = json.filter((thought) => {
          return thought.message !== "";
          });
          setThoughts(filteredThoughts);
        });
  }, []);
  
  const likeHeart = (id, clicks) => {
  
    const updatedLikes = thoughts.map((thought) => {
      if (thought._id === id) {
        thought.hearts += 1;
      }
      return thought;
    });
    setThoughts(updatedLikes); 
  };
  return (
    <>
      <InputFormContainer />
      <section className="thought-container">
        {thoughts.map((thought) => (
          <MessageList
            key={thought._id}
            id={thought._id}
            message={thought.message}
            timeCreated={thought.createdAt}
            hearts={thought.hearts}
            likeHeart={likeHeart} />
        ))}
      </section>
    </>
  );
};