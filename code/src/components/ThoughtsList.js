import React, { useState } from "react"
import { useEffect } from "react"
import { ThoughtCard } from "./ThoughtCard"

export const ThoughtsList = () => { 
    const ThoughtsUrl= "https://happy-thoughts-technigo.herokuapp.com/thoughts";
    const [thoughts, setThoughts] = useState([]);

    useEffect (() => { 
    // useEffect prevents the infinite looping of creating new arrays after the data is fetched. 

        fetch(ThoughtsUrl)
            .then ((response) => {
                return response.json()
            })
            .then (data => { 
                const filteredThoughts = data.filter(thought => {
                    return thought !== '';
                });
                setThoughts(filteredThoughts);
            });
    }, []);

    return (
        <>
          <section className="thoughts-container">
            {thoughts.map((thought) => (
              <ThoughtCard key={thought._id} message={thought.message} createdTime={thought.createdAt} />
            ))}
          </section>
        </>
      )
    };

    
