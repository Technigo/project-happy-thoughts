import React, { useState, useEffect } from 'react';

export const App = () => {
  const [stateVariable, setStateVariable] = useState('');
  const [thoughtsList, setThoughtsList] = useState([]);
  const [refreshData, setRefreshData] = useState(true);
  const happyEndpoint = 'https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts'

  const fetchHappy = () => {
    fetch(happyEndpoint) // fetching the api data
      .then((response) => response.json())
      .then((data) => setThoughtsList(data))
      .catch((error) => console.log(error))
      .finally(() => { console.log('fetch was successfull') })
  }
  // this function will send the message to the api.
  const sendHappy = () => {
    fetch(happyEndpoint, {
      method: 'POST',
      body: JSON.stringify({
        message: stateVariable
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
      .then(() => {
        // to clear the input after the message has been sent to the API.
        setStateVariable('')

        // to refresh the list with the new data.
        setRefreshData(false) // erase the old version of happy thoughts.
        fetchHappy();
        setRefreshData(true) // display new version of happy thoughts.
      })
      .finally(
        console.log('POST request successful')
      )
  }

  useEffect(fetchHappy, [])

  return (
    <>
      <div className="Card"> <h1>What is making you happy now?</h1>
        <input type="text" value={stateVariable} onChange={(event) => setStateVariable(event.target.value)} />
        <button className="send" type="button" onClick={(event) => { sendHappy(event) }}>❤️ Send happiness ❤️ </button>
      </div>
      <div className="messages">
        {refreshData && thoughtsList.map((thought) => {
        // eslint-disable-next-line no-underscore-dangle
          return (<p key={thought._id}>{thought.message} ❤️: {thought.hearts}</p>)
        })}
      </div>
    </>
  );
}
