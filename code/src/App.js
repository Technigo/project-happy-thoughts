import React, { useState, useEffect } from 'react';
import ThoughtsList from 'components/ThoughtsList'
import ThoughtsForm from 'components/ThoughtsForm'


export const App = () => {

const [thoughtsList, setThoughtsList] = useState([])
const [thoughtsForm, setThoughtsForm] = useState([])
const [newThought, setNewThought] = useState('');

useEffect(()=> {
  fetchThoughts();
}, []);

const fetchThoughts = () => {
  fetch('http://week7-backend.herokuapp.com/tasks')
  .then((data) => data.json())
  .then((transformedData) => setThoughtsList(transformedData))
  .catch(error => console.error(error))
  .finally(() => console.log('everything is fine'))
}


const handleFormSubmit = (event) => {
  event.preventDefault();

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message: newThought }),
  }

    fetch('http://week7-backend.herokuapp.com/tasks', option)
      .then((data) => data.json())
      .then((transformedData) => setThoughtsList(transformedData))
      .finally(() => setNewThought(''))
  };



  return (
  <>
    <ThoughtsForm 
    onFormSubmit={handleFormSubmit}
    thoughtForm = {thoughtsForm} 
    setThoughtForm = {setThoughtsForm}/>


    <ThoughtsList 
    thoughtslist = {thoughtsList}
    setThoughtList = {setThoughtsList} />
  </>
  ); }

