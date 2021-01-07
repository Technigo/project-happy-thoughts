import React, { useState, useEffect } from 'react';
import { CreatePost } from './CreatePost';
import './HappyThoughts.css';


export const HappyThoughts = props => {
  const THOUGHTS_URL = 'https://happpiisissss.herokuapp.com/thoughts';
  const [thoughts, setThoughts] = useState([]);

  useEffect(() => {
    fetch(THOUGHTS_URL)
      .then(res => res.json())
      .then(data => {
        setThoughts(data);
      });
  }, []);

  const onLiked = (thoughtId) => {
    const thoughtsUpdated = thoughts.map((thought) => {
      if(thought._id === thoughtId) {
        thought.heart +=1
      }
      return thought
    });
    setThoughts(thoughtsUpdated)
  };

  return (
    <div>
      {thoughts.map(thought => (
        <CreatePost
          key={thought._id} 
          thought={thought}
          hearts={thought.hearts} 
          onLiked={onLiked}
        />
      ))
      }
    </div>
  );
};