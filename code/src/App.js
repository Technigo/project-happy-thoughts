// /////////////// IMPORT //////////////////////// //

import React, { useEffect, useState } from 'react';
import { ThoughtsList } from 'Components/ThoughtsList/ThoughtsList';
import { ThoughtsInputBox } from 'Components/ThoughtInputBox/ThoughtsInputBox';
import { Footer } from 'Components/Footer/Footer';

// /////////////// MAIN APP //////////////////////// //

// The function starts with declaring,
// the variables and sets the useState value.

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newMessage, setNewMessage] = useState('');

  // Here we are calling the API and gets the JSON.
  // The setLoading (true) shows "loading text" if the API call is delayed.
  // .catch is catching eventual errors and displays them in a consol.log
  // No options is created for this request its per default a GET

  const fetchThoughts = () => {
    setLoading(true)
    fetch('https://project-happy-thoughts-api-4tdp4buvnq-lz.a.run.app/thoughts')
      .then((response) => response.json())
      .then((data) => setThoughts(data.response))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
  }

  // This is an React hook called useEffect. It executes the fetchThoughts function.
  // This function only runs first time the its mounted.

  useEffect(() => {
    fetchThoughts(); // <--- This is a callback function. Its executed on every render of the page
  }, []); // <--- This is the dependency array. When you put something(variables) in here
  //  it executes every time the array change. But when its empty its only called when mounted.
  // And ofcourse every time the fetchThouths function is called.

  // This function sets the value of the,
  // event which is when the user writes a new thought.

  const handleNewThoughtsChange = (event) => {
    setNewMessage(event.target.value)
  }

  // This function takes an object as a parameter.
  // The object in this case is the text the user writes
  // The event.preventDefault prevents the default behavior for the form
  // to refresh the page when pressing the submit button.

  const onFormSubmit = (event) => {
    event.preventDefault();

    // The onFormSubmit function creates this object called option with three key-values:
    // POST indicates that the data(event) will be sent as a Post request to the API.
    // The headers is indicates that the content being sent in in JSON format.

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: newMessage })
    }

    fetch('https://project-happy-thoughts-api-4tdp4buvnq-lz.a.run.app/thoughts', options)
      .then((res) => res.json())
      .then((data) => { setThoughts([data.response, ...thoughts]) })
      .finally(() => setNewMessage(''));
  }

  // This function increases the number of likes for a specific(ID) thought.
  // The function creates this object called options with three key-values:
  // POST is an HTTP method that in this case updates the number of likes.

  const theLikeIncreaser = (LikeID) => {
    const options = { method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      } }

    setLoading(true);

    // In this fetch (network request) the argument is a url with the ID of the thought
    // witch number of likes should be updated
    // the options in this request is set to POST for we want to send a likes-value.

    fetch(`https://project-happy-thoughts-api-4tdp4buvnq-lz.a.run.app/thoughts/${LikeID}/like`, options)
      .then((banana) => banana.json())
      .then((data) => {
        if (data.success) {
          fetchThoughts();
        } else {
          console.error(data.message);
        }
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setLoading(false);
      });
  };
    // After the request is completed the fetchThoughts function is executed
    // This updates the list of thoughts and also updates the number of likes in them

  // /////////////// MAIN APP RETURNS JXS //////////////////////// //

  // The return displays three components inside a <div> ThoughtsForm,  ThoughtsFlow, Footer
  // The ThoughtForm component is passed 3 props that handle the form submission of new "thoughts"
  // The ThoughtsFlow component is passed 2 props loading and thoughts.
  // Footer is a "dumb component" that just display text and a picture.

  return (
    <div>
      <ThoughtsInputBox
        newMessage={newMessage}
        handleNewThoughtsChange={handleNewThoughtsChange}
        onFormSubmit={onFormSubmit} />

      <ThoughtsList
        loading={loading}
        thoughts={thoughts}
        theLikeIncreaser={theLikeIncreaser} />

      <Footer />
    </div>
  )
}