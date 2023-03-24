import React, { useState, useEffect } from 'react';

import ThoughtCard from 'components/ThoughtCard';
import SubmitForm from 'components/SubmitForm';

// *************** MAIN APP ***************  //

// The function starts with declaring,
// the variables and sets the useState value.

const Parent = () => {
  const [thoughts, setThoughts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newThought, setNewThought] = useState('');

  // Here we are calling the API and gets the JSON.
  // The setLoading true shows "loading text" if the API call is delayed.
  // .catch is catching eventual errors and displays them in a consol.log

  const fetchThoughts = () => {
    setLoading(true);
    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts')
      .then((res) => res.json())
      .then((data) => setThoughts(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }

  // This is an React hook called useEffect. It executes the fetchThoughts function.
  // This function only runs first time the its mounted.

  useEffect(() => {
    fetchThoughts(); // <--- This is a callback function. Its executed on every render of the page
  }, []); // <--- This is the dependency array. When you put something(variables) in here
  //  it executs everytime the array change. But when its empty its only called when mounted.

  // This function sets the value of the,
  // event wich is when the user writes a new thought.
  const handleNewThoughtChange = (event) => {
    setNewThought(event.target.value)
  }

  // This function takes an object as a parameter.
  // The object in this case is the text the user writes
  // The event.preventDefault prevents the default behavior for the form
  // to refresh the page on submission. ??

  const onFormSubmit = (event) => {
    event.preventDefault();

    // The onFormSubmit function creates this object called option with three key-values:
    // POST indicates that the data(event) will be sent as a Post request to the API.
    // The headers is indicates that the content being sent in in JSON format.

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: newThought
      })
    }

    // Here the fetchThoughts-function is executed again using
    // a GET request to fetch the updated list of thoughts.

    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts', options)
      .then((res) => res.json())
      .then(() => fetchThoughts())
      .finally(() => setNewThought(''));

  // This function increases the number of likes for a specific(ID) thought.
  // The function creates this object called options with three key-values:
  // POST is an HTTP method that in this case updates the number of likes.
  }

  const onThoughtLikeChange = (_id) => {
    console.log('Heart button clicked:', _id);
    const option = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }

    // In this fetch (network request) the argument is a url with the ID of the thought
    // witch number of likes should be updated
    // the options after the url is the object created above.

    fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${_id}/like`, option) // _id is the key in API
      .then((res) => res.json())
      .catch((error) => console.error(error))
      .then(() => fetchThoughts()) // update the data, hence redoing the fetchThought
  }

  // After the request is completed the fetchThoughts function is executed
  // This updates the list of thoughts and also updates the number of likes in them

  // *************** MAIN APP RETURNS JXS ***************  //

  // The return displays two components inside a <div> ThoughtsForm & ThoughtsFlow
  // The ThoughtForm component is passed 3 props that handle the form submission of new "thoughts"
  // The ThoughtsFlow component is passed 2 props loading and thoughts.

  return (
    <div>
      <SubmitForm
        newThought={newThought}
        onNewThoughtChange={handleNewThoughtChange}
        onFormSubmit={onFormSubmit} />
      <ThoughtCard
        loading={loading}
        thoughts={thoughts}
        setThoughts={setThoughts}
        onThoughtLikeChange={onThoughtLikeChange} />
    </div>
  );
}

export default Parent;

