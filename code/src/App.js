 /* eslint-disable */ 

import React, { useState, useEffect } from 'react';
import Tweet from 'components/Tweet';

export const App = () => {
  // const [userInput, setUserInput] = useState(0);
  const [Tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newTweet, setNewTweet] = useState('');


  ///fetch the data///
  const fetchThoughts= ()=>{
    setLoading(true);
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
        .then((data) => data.json())
        .then((transformedData) => setTweets(transformedData)
        .catch((error) => console.log.error(error))
        .finally(() => setLoading(false))
        );
      }
        // console.log('once when site reloads'), []};
      



  useEffect = () => {
    console.log('each time change'), [userInput]
  };

  // const handleCounterButtonClick = () => {
  //   setCounter(counter + 1); // Här ska den skicka värdet till component Se video
  // }

  return (
    // Form you add userinput//
    <section className ="container">
      <div className ="form">
        <h1>Spread some love! What make you happy right now?</h1>
        <div className ="input-box" />
        <input>

        </input>
        {/* <div>{counter}</div> */}
        {/* <button onClick={handleCounterButtonClick} type="button">Send happy thought!</button> */}

        <p><button type="button">Send happy thought!</button></p>
        {/* {counter === 1 && (<TaskList
          list="test lista" />)} */}
      </div>
      <div className ="tweets-wrapper">
      <Tweet />
      </div>


    </section>



  );
}
