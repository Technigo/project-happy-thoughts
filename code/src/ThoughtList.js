import React, { useState, useEffect } from "react";
import { Thought } from "Thought";
import { Detail } from "./Detail";


export const ThoughtList = () => {
  const [thoughts, setThoughts] = useState([]);
  const [selectedPokemon, setselectedPokemon] = useState();


  //Add the empty array as input, to run this funtcion only on mount
  //When we have got a response from the API,
  //we put the result in the thoughts-state variable.
  
  //This only done once because we are doing it inside of the useEffect function,
  // so it is only done on mount of the App-component.
  useEffect(() => {
    fetch("https://happy-thoughts-technigo.herokuapp.com/thoughts")
    .then((res) => res.json())
      //set the result from api-call in state variable.
     .then((data) => setThoughts(data));
  }, []);

  //Iterate over the thoughts state array to list all the objects.
  return (
    <section className="thoughts-list">
 
      {thoughts.map((thought) => (
        <Thought 
          id = {thought._id}
          message = {thought.message}
          createdAt = {thought.createdAt}
          hearts = {thought.hearts}
        />
        ))}
    
    </section>
  );
};
