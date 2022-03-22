import React, {useState, useEffect} from 'react'

import Form from './components/Form.js'

export const App = () => {
  const [apiData, setApiData] = useState();

  useEffect(() => {
    async function getApiData() {
      const response = await fetch (`https://happy-thoughts-technigo.herokuapp.com/thoughts`)
      let data = await response.json();
      setApiData(data);
    }
    getApiData();

    //Fetch
    // fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts`)
    // .then(res => res.json())
    // .then(data => setApiData(data))  
    // .catch(err => console.log(err.message))
  }, [])

  return (
    <div className="flex-parent">
      {apiData && apiData.map(messageIndex => {
        const { _id, message, hearts, createdAt } = messageIndex;
        return (
          <div key={_id} className="message-display-div">
            <p>Message: {message}</p>
            <p>Likes: {hearts}</p> 
            <p>Created: {createdAt}</p> 
          </div>
        );
      })}
      <Form />
    </div>
  )
}
