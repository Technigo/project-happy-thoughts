import React, { useState, useEffect } from 'react';

import ThoughtsList from 'components/ThoughtsList'
import ThoughtsForm from 'components/ThoughtsForm'


export const App = () => {

const [thoughtsList, setThoughtsList] = useState([])
const [newThought, setNewThought] = useState('');

// const [thoughts, setThoughts] = useState([]);

useEffect(()=> {
  fetchTasks();
}, []);

const handleNewThoughtChange = (event) => {
  setNewThought(event.target.value)
}

const fetchTasks = () => { //Extracted in a function not to repeat itself
  fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
  .then((data) => data.json())
  .then((addingNewThought) => setThoughtsList(addingNewThought))
  .catch(error => console.error(error))
  .finally(() => console.log('everything is fine'))
}


//Send Happy thoughts button
const handleFormSubmit = (event) => {
  event.preventDefault(); //single page application, don't want to reload. Default behavior = reload

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message: newThought }),
  }

    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts', options)
      .then((data) => data.json())
      .then(() => {fetchTasks()})
  };


  return (
  <>
    <ThoughtsForm 
    newThought={newThought}
    handleNewThoughtChange={handleNewThoughtChange}
    onFormSubmit={handleFormSubmit} />
   
    <ThoughtsList 
    list = {thoughtsList}
    />
    </>


  ); }

