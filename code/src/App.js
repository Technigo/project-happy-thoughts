import React, { useState, useEffect } from 'react';
import ThoughtsList from 'components/ThoughtsList';
import ThoughtForm from 'components/ThoughtForm';


export const App = () => {
  const [counter, setCounter] = useState(0);
  const [newThought, setNewThought] = useState('');
  const [thoughts, setThoughts] = useState([]);
  const [loading, setLoading] = useState(false);
  // useEffect with empty array [] call your functions on application start
  

  // https://project-happy-thoughts-api-lsdubteuzq-lz.a.run.app/
  
  const fetchData = () => {
    setLoading(true);
    //fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
    fetch('https://project-happy-thoughts-api-lsdubteuzq-lz.a.run.app/thoughts')
      .then((response) => response.json())
      .then((Data) => setThoughts(Data)) 
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
  
  const onNewThoughtChange = (event) => {
    setNewThought(event.target.value);
  }

const handleHeartCounter = (_id) => {
  const options = {
    method: 'POST',
    headers: {'Content-Type': 'application/json',},
  };
 //GET LIKES 
  //fetch( `https://happy-thoughts-technigo.herokuapp.com/thoughts/${_ID}/like`, options)
  fetch(`https://project-happy-thoughts-api-lsdubteuzq-lz.a.run.app/thoughts/${_id}/like`, options)
    then((response) => response.json())
    .finally(() => fetchThought(data));
};

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const options = {
      method: 'POST',
      body: JSON.stringify
      ({message: newThought }),
      headers: {'Content-Type': 'application/json'}
    }

    // get 
    setLoading(true);
    //fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts', options)
    fetch('https://project-happy-thoughts-api-lsdubteuzq-lz.a.run.app/thoughts', options)
      .then((response) => response.json())
      .then(() => fetchData())
      .catch((error) => console.error(error))
      .finally(() => setNewThought(''));
    }
  if (loading) {
  return (
  <p>THE PAGE IS LOADING</p> )}

  return (
    <section className="section">
    <h2 className="header">Share happiness with happy thought!❤️</h2>
   
      <ThoughtForm
        newThought={newThought}
        handleFormSubmit={handleFormSubmit}
        onNewThoughtChange={onNewThoughtChange}/>
      
      <ThoughtsList
      thoughts={thoughts}
      setThoughts={setThoughts}
      handleHeartCounter={handleHeartCounter}/>
    </section>
    
  );
  }
 
  //const handleFormCleanup = () => {
  //setNewThought('');
   //setLoading(false); }
 
   //<p>{counter}</p>
  //<button onClick={handleCounterIncreaseButtonClick} type="button">counter increase</button>

   // will trigger first when app starts, and every time the variable in the dependency array changes
  //useEffect(() => {
  //window.alert(`the current counter is ${counter}`);
 // }, [counter]);

  //const handleHeartCounter = () => {
  //setCounter(counter + 1);}

   //if loading  uppdate page every 10 min
  //  setInterval(fetchData, 10 * 60 * 1000);