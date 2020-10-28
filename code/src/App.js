import React, { useState, useEffect } from 'react';

import "./index.css"
import { HappyForm } from "./components/js/HappyForm";
import { HappyThought} from "./components/js/HappyThought"
import { ThoughtsList } from "./components/js/ThoughtsList";
import { STATUS_URL } from "./components/js/urls";


export const App = () => {
  const [thoughts, setThoughts] = useState([]);

  useEffect(() => {
    fetchThoughts();  
  }, []);

  const fetchThoughts = () => {
    fetch(STATUS_URL)
      .then(res => res.json())
      .then(data => setThoughts(data.reverse()))
  }

  const onLiked = thoughtId => {
    const updatedThoughts = thoughts.map(thought => {
      if (thought._id === thoughtId) {
        thought.hearts +=1
      }
      return thought
    })
    setThoughts(updatedThoughts)
  }

  return (
    <main>
    <div className="card">
      <HappyForm />
      <ThoughtsList thoughtsList={thoughts} />
    </div>
    </main>
  )
}
