import React, { useState, useEffect } from 'react'

import {Form} from './components/Form';
import { ThoughtCard } from 'components/ThoughtCard';

import { API_URL, LIKES_URL} from './utils/urls';

export const App = () => {
  //useState is like container, that contains a variable and a function
  //you can uppdate variable with function. This function exist somewhere in React and do update variable
  //if useState() is empty it gives undefined
	const [thoughts, setThoughts] = useState([]);

    /* useEffect is like reaction to componenet behavior*/ 
  // it can be a couple of useEffect in one componenet, and you can apply useEffect to different fases of componenet live 
  useEffect(() => {
    fetchRequest()
  }, []);

  /* fetching api function */
  const fetchRequest = () => {
    fetch(API_URL)
      .then((res) => res.json())
      /*json is an array with 20 object in it, 
      here we passing json object to setMessage function. So now state is updated
      and message has a value of json object?
      saving data from json to thoughts*/
      .then((json) => setThoughts(json))
  }


  const handleLikesIncrease = (thoughtId) => {
    console.log(thoughtId)
		const options = {
			method: 'POST',
		};

		fetch(LIKES_URL(thoughtId), options)
			.then((res) => res.json())
			.then((data) => {

				fetchRequest();
			});
	};



  return (
     <div>
      <Form /> 
      {thoughts.map(thought => (
        <ThoughtCard 
          key={thought._id}
          id={thought._id}
          message={thought.message}
          date={thought.createdAt}
          hearts={thought.hearts}
          onLikesIncrease={handleLikesIncrease}
          />
      ))}
     </div>

  );
};
