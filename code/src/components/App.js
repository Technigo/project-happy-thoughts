import React, {useState, useEffect} from 'react'

import { Thoughts } from 'components/Thoughts'
import { Input } from 'components/Input'
import { INPUT_URL, THOUGHTS__URL } from './urls'

import './app.css'

/* TO FIX: Bad request on line 30, figure out why,
Also: Actually post whatever is sent to the feed */

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [userInput, setUserInput] = useState([]);

  useEffect(() => {
    sendThought();
  }, [])

  const sendThought = () => {
    fetch(INPUT_URL/* INPUT__URL */, {
      /* method: 'POST',
      body: JSON.stringify({ message: input }) */
  })
      .then((response) => response.json())
      .then((newThought) => {
          console.log('Hello')
          setUserInput((previousThoughts) =>[newThought, ...previousThoughts])
      })
  }

  const reachMessageInput = (newMessage) => {
    fetch(THOUGHTS__URL, {
      method: 'POST',
      headers: { 'content-Type': 'application/json'},
      body: JSON.stringify({ message: newMessage })
    })
    .then((/* data */) => /* console.log(data) */
    window.location.reload())
  }
  

  return (
    <div className="app__grid">
      <Input
      input={'Hello'}
      inputType={'text'}
      /* sendThought={sendThought} 
      submit={submit}*/
      onMessageChange={reachMessageInput}
      />
      
      <Thoughts
      thoughts={thoughts}
      setThoughts={setThoughts}
      />
    </div>
  )
}
