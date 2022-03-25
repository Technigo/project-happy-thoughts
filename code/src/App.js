import React, { useState, useEffect } from 'react'

import Form from './components/Form.js'
import MessageDisplay from './components/MessageDisplay.js'

export const App = () => {
  const [apiData, setApiData] = useState();

  // gör om till IIFE
  useEffect(() => {
    async function getApiData() {
      const response = await fetch(
        'https://happy-thoughts-technigo.herokuapp.com/thoughts'
      )
      const data = await response.json();
      setApiData(data);
      console.log('första')
    }
    getApiData();
  }, [])

  useEffect(() => {
    console.log('andra')
  }, [])

  return (
    <div className="flex-parent">
      <Form />
      <MessageDisplay
        apiData={apiData} />
    </div>
  )
}