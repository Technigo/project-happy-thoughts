import React, { useState, useEffect } from 'react';
import ThoughtsList from 'components/ThoughtsList';
import ThoughtForm from 'components/ThoughtForm';


export const App = () => {
  const [counter, setCounter] = useState(0);
  const [newThought, setNewThought] = useState('');
  const [thoughts, setThoughts] = useState([]);
  const [loading, setLoading] = useState(false);
  // useEffect with empty array [] call your functions on application start
  
  
  const fetchData = () => {
    setLoading(true);
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
      .then((response) => response.json())
      .then((Data) => setThoughts(Data)) //no reverse to get the latest post to show at first in list
      .catch((error) => console.error(error))
      .then(console.log('works'))
      .finally(() => setLoading(false));
  }
  //get 20 thoughts from API
  useEffect(() => {
    fetchData();
  }, []); 

  // will trigger first when app starts, and every time the variable in the dependency array changes
  useEffect(() => {
  //window.alert(`the current counter is ${counter}`);
  }, [counter]);

  //const handleCounterIncreaseButtonClick = () => {
    //setCounter(counter + 1);
  //}

  const onNewThoughtChange = (event) => {
    setNewThought(event.target.value);
  }


const handleHeartCounter = (heartCounterID) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  };
//  get heart counter
  fetch( `https://happy-thoughts-technigo.herokuapp.com/thoughts/${heartCounterID}/like`, options)
    then((response) => response.json())
    .finally(() => fetchThought());
};



  const handleFormCleanup = () => {
  setNewThought('');
   setLoading(false);
   }

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: 'POST',
      body: JSON.stringify
      ({message: newThought }),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    setLoading(true);
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts', options)
      .then((response) => response.json())
      .then(() => fetchData())
      .catch((error) => console.error(error))
          //.then(() => handleFormCleanup());
      .finally(() => setNewThought(''));
    }
    if (loading) {
    return (
      <p>THE PAGE IS LOADING</p>
    )
  }
  return (
     <section className="section">
    <h2 className="header">Share happiness with happy thought!❤️</h2>
   
      <ThoughtForm
        newThought={newThought}
        handleFormSubmit={handleFormSubmit}
        onNewThoughtChange={onNewThoughtChange}
      />
      <ThoughtsList
      thoughts={thoughts}
      handleHeartCounter={handleHeartCounter}
      />
    </section>
    
  );
  }
 
  //<p>{counter}</p>
  //<button onClick={handleCounterIncreaseButtonClick} type="button">counter increase</button>