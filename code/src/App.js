import React, { useState, useEffect } from 'react';

import {Form} from './components/Form';
import { ThoughtCard } from 'components/ThoughtCard';
import { FilterButtons } from './components/FilterButtons';

import { API_URL, LIKES_URL} from './utils/urls';

export const App = () => {
  //useState is like container, that contains a variable and a function
  //you can uppdate variable with function. This function exist somewhere in React and do update variable
  //if useState() is empty it gives undefined
	const [thoughts, setThoughts] = useState([]);
  /*new thought is the value from input*
  setNewThought function, sets value to the newThought*/
	const [newThought, setNewThought] = useState("");
  const [filteredArray, setFilter] = useState([]);

  // Those two function are handeling filtering of thoughts array. 
  // I made two function, but it is sure a way of doing it in another way. 
  // Maybe by combining two functions in one, and use conditions inside for different button clicks
  const handleOldestButton = (e) => {
    e.preventDefault()

    // sorting array of thoughts by date, so the oldest messages comes first 
    const sorted = [...thoughts].sort((oldestMsg, newestMsg) => {
      return new Date(oldestMsg.createdAt) - new Date(newestMsg.createdAt);
    }); 
    // setting the value of sorted to setFilter function which sets value to filteredArray
    setFilter(sorted)
  };

  const handleNewestButton = () => {
    const sorted = [...thoughts].sort((oldestMsg, newestMsg) => {
      return new Date(newestMsg.createdAt) - new Date(oldestMsg.createdAt);
    }); 
    setFilter(sorted)
  };

  // useEffect is like reaction to componenet behavior 
  // it can be a couple of useEffect in one componenet, and you can apply useEffect to different fases of componenet live 
  useEffect(() => {
    getRequest()
  }, []);

  /* get request for fetchnig thoughts from backend, everytime this function calls it uppdates? */
  const getRequest = () => {
    fetch(API_URL)
      .then((res) => res.json())
      /*json is an array with 20 object in it, 
      here we passing json object to setMessage function. So now state is updated
      and message has a value of json object?
      saving data from json to thoughts*/
      .then((json) => {
        setThoughts(json);
        setFilter(json)

      });
  };

  const handleFormSubmit = (event) => {
		event.preventDefault();

		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ message: newThought }),
		};

		fetch(API_URL, options)
			.then((res) => res.json())
			.then(() => {
        getRequest();
        setNewThought("");
      });
	};

  /* function to increase the mount of hearts, passing the id of thought as argument to this function*/
  const handleLikesIncrease = (thoughtId) => {
    /*options object that needed to POST messages*/
		const options = {
			method: 'POST',
		};
    /*fetch takes in two arguments, one of them is likes url which is variable from urls.js file that takes in an argument with thought id, 
    and second argument is options variable which is connected to backend */
		fetch(LIKES_URL(thoughtId), options)
			.then((res) => res.json())
      /*Sending request to backend*/ 
			.then(() => getRequest());
	};

  return (
     <>
      {/* Passing handleFormSubmit function and use state as props to form js */}
      <Form 
      	handleFormSubmit={handleFormSubmit}
        newThought={newThought}
        setNewThought={setNewThought}
      /> 

      <FilterButtons 
        handleOldestButton={handleOldestButton}
        handleNewestButton={handleNewestButton}
      />

      {/* mapping filteredArray */ }
      {filteredArray.map((thought) => {
        return (
          <ThoughtCard 
          key={thought._id}
          thought={thought}
          onLikesIncrease={handleLikesIncrease}
        />
        );
      })};

     </>
  );
};
