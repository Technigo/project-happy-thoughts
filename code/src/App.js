/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { ThoughtInput } from 'components/ThoughtInput';
import { EachThought } from 'components/EachThought';

export const App = () => {
  const [eachThought, setEachThought] = useState('');
  // because a new thought has no value and then changes state to having a value

  const [thoughtInput, setThoughtInput] = useState([]);
  // because the Thought Input changes state when a new thought is added

  const fetchThoughts = () => {
    // fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts')
    fetch('https://fiona-klacar-project-happy-thoughts-api.onrender.com/thoughts')
      .then((res) => res.json()) // converts the 'response' object to a JSON object
      .then((data) => setThoughtInput(data)) // updates the state with the data from the
    // response using the 'setThoughtInput' function
      .catch((error) => console.error(error)) // catches errors
      .finally(() => { console.log('fetch was successful') }) // this is where setLoading(false)); would go
  }

  useEffect(() => {
    fetchThoughts();
  // we want to fetch the most recent thoughts from the API
  // every time the page is mounted/reloaded - so we use an empty array as a dependency
  }, []);

  const onEachThoughtChange = (event) => {
    setEachThought(event.target.value)
  }

  const onFormSubmit = (event) => {
    event.preventDefault(); // prevents from reloading entirely when user submits a thought

    // Note that const onFormSubmit includes everything from line 32 to line 52.

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: eachThought
      })
    }

    // fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts', options)
    fetch('https://fiona-klacar-project-happy-thoughts-api.onrender.com/thoughts', options)
      .then((res) => res.json())
      .then((data) => console.log(data)) // Don't put setThoughtInput as the whole thing will be replaced
      .catch((error) => console.error(error)) // catches errors
      .finally(() => { fetchThoughts(); setEachThought(''); }); // This collects all the updated thoughts and updated likes
  };

  // THIS IS ANOTHER WAY OF DOING IT
  // .then((res) => res.json())
  // .then((newThought) => {
  //     //Now you have `newThought` which is the response from the
  //     // API as documented at the top of this readme. You can use
  //     // it to update the `thoughts` array:
  // setThoughts((previousThoughts) => [newThought,...previousThoughts]) // Here is object destructuring - it adds the
  // new thought to the array as an object and adds the previous thoughts to it after
  // })

  return (
    <div className="mainContainer">
      <ThoughtInput
        eachThought={eachThought}
        onEachThoughtChange={onEachThoughtChange}
        onFormSubmit={onFormSubmit} />
      <EachThought thoughtInput={thoughtInput} fetchThoughts={fetchThoughts} />
    </div>
  )
}
