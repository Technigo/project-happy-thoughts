/* eslint-disable */

import React, { useState } from 'react';
import { ThoughtsList } from 'components/ThoughtsList';
import { useEffect } from 'react';
import { NewThoughtsForm } from 'components/NewThoughtsForm';

export const App = () => {
  const [thoughtsList, setThoughtsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newThoughts, setNewThoughts] = useState("");
  const [newLike, setNewLike] = useState(false);
  const [count, setCount] = useState(0);

  // create function to fetch thoughts from database
  const fetchThoughts = () => {
    //setLoading(true);
    console.log("fetchThoughts")
    //  old API url https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts
    fetch("https://project-happy-thoughts-api-s7fgmoqnaa-lz.a.run.app/thoughts")
      .then((result) => result.json())
      .then((json) => {
        setThoughtsList(json.response)
      })
      .catch(error => console.log(error))
      .finally(() => { setLoading(false), setNewLike(false) })
    
  }

  // useEffect is triggered on restart,newLike and loading
  useEffect(() => {
    console.log("useEffect")
    if (newLike === true || loading === true) {
      fetchThoughts();
    }
  }, [newLike, loading]);


  //create function to set the value of newThoughts variable 
  const handleNewThoughtsChange = (event) => {
    // console.log("handleNewThoughtsChange")
    setNewThoughts(event.target.value)
    setCount(event.target.value.length)
  }

  //create function to handle submission(add users' thoughts to database)
  const onFormSubmit = (event) => {
    event.preventDefault();

    console.log("creating new thought")
    console.log(newThoughts)
    const options =
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: newThoughts
      })
    }


    fetch("https://project-happy-thoughts-api-s7fgmoqnaa-lz.a.run.app/thoughts", options)
    .then((result) => result.json())
      .then((data) => {
        fetchThoughts()   //data.response)
      }
      )
      .catch((error) => console.error(error))
      .finally(() => setNewThoughts(""))

  }

  return (
    <div className="happy-thought-wrapper">
      <NewThoughtsForm
        newThoughts={newThoughts}
        onNewThoughtsChange={handleNewThoughtsChange}
        onFormSubmit={onFormSubmit}
        count={count}
      />
      <ThoughtsList
        setNewLike={setNewLike}
        loading={loading}
        setLoading={setLoading}
        thoughtList={thoughtsList}
        setThoughtsList={setThoughtsList}
      />
    </div>
  );

}