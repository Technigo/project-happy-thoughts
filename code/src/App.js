import React, { useState, useEffect } from 'react'

import Form from './components/Form.js'
import MessageDisplay from './components/MessageDisplay.js'

export const App = () => {
  const [apiData, setApiData] = useState();

  const getApiData = async () => {
    try {
      const response = await fetch(
        'https://happy-thoughts-technigo.herokuapp.com/thoughts'
      )
      const data = await response.json();
      setApiData(data);
      if (!response.ok) {
        throw new Error (
          `HTTP error: The status is ${response.status}`
        );
      }
      return data;
    } catch(err) {
      console.log(`error message: ${err.message}`);
    }
  }

  useEffect(() => {
    getApiData();
  }, [])

  return (
    <div className="flex-parent">
      <Form
        getApiData={getApiData} />
      <MessageDisplay
        getApiData={getApiData}
        apiData={apiData} />
    </div>
  )
}