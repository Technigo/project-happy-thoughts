/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { ThoughtsList } from 'components/ThoughtsList';

export const App = () => {
  const [newThought, setNewThought] = useState('');
  // because a new thought has no value and then changes state to having a value

  const [thoughtsList, setThoughtsList] = useState([]);
  // because the Thoughts List changes state when a new thought is added

  const fetchThoughts = () => {
    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts')
      .then((res) => res.json()) // converts the 'response' object to a JSON object
      .then((data) => setThoughtsList(data)) // updates the state with the data from the
    // response using the 'setThoughtsList' function
      .catch((error) => console.error(error)) // catches errors
      .finally(() => { console.log('fetch was successful') }) // this is where setLoading(false)); would go
  }

  useEffect(() => {
    fetchThoughts();
  // we want to fetch the most recent thoughts as a side effect
  // every time the page is mounted/reloaded - so we use an empty array as a dependency
  }, []);
  // const handleNewThoughtChange = (event) => {
  //   setNewThought(event.target.value)
  // }

  const onFormSubmit = (event) => { // difference between onFormSubmit and handleFormSubmit - the same thing
    event.preventDefault(); // prevents from reloading entirely when user submits a thought

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: newThought
      })
    }

    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts', options)
      .then((res) => res.json())
      .then((data) => console.log(data)) // Don't put setThoughtsList or setNewThoughts, as the whole thing will be replaced
      .catch((error) => console.error(error)) // catches errors
      .finally(() => fetchThoughts()); // This collects all the updated thoughts including the one you just posted, and displays
  }

  // THIS IS ANOTHER WAY OF DOING IT
  // .then((res) => res.json())
  // .then((newThought) => {
  //   setThoughts((previousThoughts) => [newThought,...previousThoughts]) // Here is object destructuring - it takes the
  // new thought to the array as an object and adds the previous thoughts to it after
  // })

  // To stop the default behaviour of a form submission leading to page being refreshed or
  // navigating to a new URL when a new thought is typed

  // ON NOTION:
  // fetch('https://technigo-thoughts.herokuapp.com/', {
  //   method: 'POST',
  //   body: JSON.stringify({ message: 'Hello world' })
  // })
  //   .then((res) => res.json())
  //   .then((newThought) => {
  //     // Now you have `newThought` which is the response from the
  //     // API as documented at the top of this readme. You can use
  //     // it to update the `thoughts` array:
  //     setThoughts((previousThoughts) => [newThought, ...previousThoughts])
  //   })
  const onNewThoughtChange = (event) => {
    setNewThought(event.target.value)
  }

  return (
    <div>
      <ThoughtsList newThought={newThought} onNewThoughtChange={onNewThoughtChange} onFormSubmit={onFormSubmit} />
      {thoughtsList.map((thought) => {
        // eslint-disable-next-line no-underscore-dangle
        return (<p key={thought._id}>{thought.message}</p>)
      })}
    </div>
  )
}
// event handler where setNewThought state updates?
