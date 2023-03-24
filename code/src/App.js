/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';

export const App = () => {
  const [stateVariable, setStateVariable] = useState('');
  const [thoughtsList, setThoughtsList] = useState([]);
  const happyEndpoint = 'https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts';

  const fetchHappy = () => {
    fetch(happyEndpoint)
      .then((response) => response.json())
      .then((data) => setThoughtsList(data))
      .catch((error) => console.log(error))
      .finally(() => { console.log('fetch was successful') });
  }

  const sendHappy = () => {
    fetch(happyEndpoint, {
      method: 'POST',
      body: JSON.stringify({ message: stateVariable }),
      headers: { 'Content-type': 'application/json; charset=UTF-8' }
    })
      .then(() => {
        setStateVariable(''); // Clear the input after the message has been sent to the API.
        fetchHappy(); // Update/Bring me the thought list with the new ones
      })
      .finally(() => {
        console.log('POST request was successful');
      })
  }
  const increaseLike = (thought) => {
    const options = {
      method: 'POST'
    }

    console.log('options', options)
    // eslint-disable-next-line no-underscore-dangle
    fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${thought._id}/like
    `, options)
      .then((response) => response.json())
      .then((data) => { console.log(data) })
      .catch((error) => console.log(error))
      .finally(() => {
        fetchHappy();
        console.log('heart count increased');
      })
  }
  // excecute the fetch happy on the first render since the array is empty
  useEffect(fetchHappy, []);

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const formattedDate = new Intl.DateTimeFormat('en-US', {
      minute: '2-digit'
    }).format(date);

    return formattedDate;
  };

  return (
    <>
      <div className="Card">
        <h1>What is making you happy now?</h1>
        <input
          type="text"
          maxLength="140"
          value={stateVariable}
          onChange={(event) => setStateVariable(event.target.value)} />
        <button
          className="send"
          type="button"
          onClick={() => { sendHappy() }}>❤️ Send happy thought ❤️
        </button>
      </div>
      <div>
        {thoughtsList.map((thought) => (
          <div className="messages-card" key={thought._id}>
            <div className="interior">
              <p className="msg">{thought.message}</p>
              <p>
                <button className="like-button" onClick={() => { increaseLike(thought) }} type="button">
                  ❤️
                </button>
                <span className="x"> x {thought.hearts}
                </span>
              </p>
              <p className="timestamp">{formatTimestamp(thought.createdAt)} minutes</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}