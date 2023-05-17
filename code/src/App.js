/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable spaced-comment */
/* eslint-disable no-trailing-spaces */
import React, { useEffect, useState } from 'react';

import Header from 'Components/Header';
import { NewThought } from 'Components/NewThought';
import { ThoughtList } from 'Components/ThoughtList';
import { Footer } from 'Components/Footer';

export const App = () => {
  const [thoughts, setThoughts] = useState([]); //variable is used to store an array of objects, which will represent the thoughts fetched from the API. 
  const [loading, setLoading] = useState(false); // a boolean value that indicates whether the API call is in progress. 
  const [newMessage, setNewMessage] = useState(''); //variable to store the value of the text area in the NewThought component.
  const [clickCount, setClickCount] = useState(0); //variable to store the value of the click count in the ThoughtList component.
  const handleNewThoughtsChange = (event) => { //function to update the newMessage state variable when the user types in the input field.
    setNewMessage(event.target.value) //The event.target.value is the value of the input field.
  } 
  //fetchThoughts function makes a GET request to the API to retrieve the thoughts and update the thoughts state variable. 
  const fetchThoughts = () => {
    setLoading(true)
    fetch('https://project-happy-thoughts-api-ss6ohtlv2q-lz.a.run.app/thoughts')
      .then((res) => res.json())
      .then((data) => { setThoughts(data.response); console.log(data) })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
  } 
  
  //The useEffect hook is used to fetch the data from the API when the component mounts, and the fetched data is set to the thoughts state using the setThoughts function.
  useEffect(() => {
    fetchThoughts();
    console.log(fetchThoughts)
  }, []);

  //The onFormSubmit function is called when the user submits a new thought. It makes a POST request to the API with the new thought message and updates the thoughts state variable.
  const onFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: newMessage
      })
    }
    // below is the fetch to the API with the new thought message and updates the thoughts state variable.
    fetch('https://project-happy-thoughts-api-ss6ohtlv2q-lz.a.run.app/thoughts', options)
      .then((res) => res.json())
      .then(() => fetchThoughts())
      .finally(() => setNewMessage(''));
  }
  //take the like ID from prev function and update the single like increase
  const upDateSingleLikeIncrease = (LikeID) => {
    // eslint-disable-next-line no-shadow
    setThoughts((thoughts) => thoughts.map((singleThougt) => {
      // eslint-disable-next-line no-underscore-dangle
      if (singleThougt._id === LikeID) { //if singleThought id is equal to the LikeID then it will increase the heart (property inside the object) by 1. 
        singleThougt.hearts += 1
      }
      return singleThougt // return the singleThought
    }))
  }
  const onLikesIncrease = (LikeID) => {
    // VARJE GÅNG MAN GÖR EN LIKE, SÄTTER DU CLICKCOUNT + 1 
    /*  setClickCount(clickCount + 1); */
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      }
    };

    fetch(`https://project-happy-thoughts-api-ss6ohtlv2q-lz.a.run.app/thoughts/${LikeID}/like`, options)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error))
      .finally(() => upDateSingleLikeIncrease(LikeID)) //this updates the whole page after clicking like
  }

  return (
    <div>
      <Header />
      <div className="thoughts">
        <NewThought
          newMessage={newMessage}
          handleNewThoughtsChange={handleNewThoughtsChange}
          onFormSubmit={onFormSubmit} />
        <ThoughtList
          loading={loading}
          thoughts={thoughts}
          onLikesIncrease={onLikesIncrease} 
          //SKICKA MED CLICKCOUNT SOM PROPS HÄR
          clickCount={clickCount} />
      </div>
      <Footer />
    </div>
   
  );
};