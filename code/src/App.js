import React, { useState, useEffect } from "react";
import "./index.css"
import { AddHappyThought } from 'components/AddHappyThought'
import { ThoughtsList } from 'components/ThoughtsList'
//import { Thought } from 'components/Thought'
//import { Heart } from 'components/Heart'

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  useEffect(() => {
    fetch("https://technigo-thoughts.herokuapp.com/")
      .then(res => res.json())
      .then(json => {
        setThoughts(json);
      });
  }, []);

  return (
    <div className="App">
      <AddHappyThought />
      <ThoughtsList thoughts={thoughts} />
    </div>
  );
  }
