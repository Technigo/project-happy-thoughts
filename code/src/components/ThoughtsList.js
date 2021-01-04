import React, { useState } from "react"

import { useEffect } from "react"
import { ThoughtCard } from "./ThoughtCard"

export const ThoughtsList = () => { 
    // TECHNIGO API => const thoughtsurl= "https://happy-thoughts-technigo.herokuapp.com/thoughts";
    const THOUGHTS_URL= 'https://happy-thoughts-sofia.herokuapp.com/thoughts';
    const [thoughts, setThoughts] = useState([]);

    // useEffect prevents the infinite looping of creating new arrays after the data is fetched. 
    useEffect (() => { 
      fetchThoughts()
    }, []);

    const fetchThoughts = () => {
      fetch(THOUGHTS_URL)
      .then ((response) => {
          return response.json()
      })
      .then (data => { 
          const filteredThoughts = data.filter(thought => {
              return thought !== '';
          });
          setThoughts(filteredThoughts);     
      });
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

    return (
          <section className="thoughts-container">
            {thoughts.map((thought) => (
              <ThoughtCard 
                key={thought._id} 
                thought={thought}
                onLiked={onLiked}/>
            ))}
          </section>
      )
    };

    
