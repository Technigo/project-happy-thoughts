import React, { useState } from 'react'
import { useEffect } from 'react'

import { ThoughtsMessage } from './Components/ThoughtsMessage.js'
import { ThoughtsForm } from './Components/ThoughtsForm.js'

export const App = () => {

  const apiUrl = "https://happy-thoughts-technigo.herokuapp.com/thoughts";
  const [messages, setMessages] = useState([]);

/* Fetching data from the Happy thoughts API
Passing the data, an array of 20 object elements, to the setMessages function which in turn passes it tp the messages state variable 
to the messages */
fetch(apiUrl)
  .then((apiData) => {
    return apiData.json()
  })
    .then((data) => {
      setMessages(data);
    }, []);
    // Bit unsure of what the [] does above

  return (
  <main>
    {/* <ThoughtsForm /> */}
    {/* Mapping through the array data that's in the messages state variable so each array element is returned via the messageDetails argument and prop to the ThoughtsMessage component */}
    {messages.map((messageDetails) => (
      <ThoughtsMessage messageDetails={messageDetails} />
    ))}
  </main>
  )
}
