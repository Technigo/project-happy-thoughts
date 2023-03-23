/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { ThoughtsList } from 'components/ThoughtsList'
import { NewThought } from 'components/NewThought'

export const App = () => {

  const [thoughtsList, setThoughtsList] = useState ([]);
  const [loading, setLoading] = useState(false);
  const [newTodo, setNewTodo] = useState('');

useEffect(() => {
  fetchThoughts();
}, []);

const fetchThoughts = () => {
  setLoading(true);
  fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts')
    .then(res => res.json())
    .then(data => setThoughtsList(data))
    .catch(error => console.error(error))
    .finally(() => setLoading(false));
}

const handleNewTodoChange = (event) => {
  setNewTodo(event.target.value)
}

const handleFormSubmit = (event) => {
  event.preventDefault()

  const options = 
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
      body: JSON.stringify({
        description: newTodo
      })
  }

  fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts', options)
    .then(res => res.json())
    .then(() => fetchThoughts())
    .finally(() => setNewTodo(''));
}


  return (
    <div>
      Here goes the heart ❤️
      <NewThought
        newTodo={newTodo}
        onNewTodoChange={handleNewTodoChange}
        onFormSubmit={onFormSubmit}
      />
      <ThoughtsList
        loading={loading}
        thoughtsList={thoughtsList}
        setThoughtsList={setThoughtsList}
      />
    </div>
  );
}

//button type="submit"
// Other components: ThoughtsList look at TaskList.js createdAt instead of date