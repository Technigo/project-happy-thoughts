import React, { useState, useEffect } from 'react'
import { MyThought } from './MyThought'

export const Thoughts = props => {
  const [thoughts, setThoughts] = useState([])
  const [myThought, setMyThought] = useState([])

  useEffect(() => {
    fetch('https://technigo-thoughts.herokuapp.com/')
      .then(res => res.json())
      .then(json => setThoughts(json))
  }, [props])

  const handleFormSubmit = (event) => {
    event.preventDefault()
    // Send the POST request with the input from your form (instead
    // of 'Hello world' like this example does):
    fetch('https://technigo-thoughts.herokuapp.com/', {
      method: 'POST',
      body: JSON.stringify({ message: { myThought } })
    })
      .then((res) => res.json())
      .then((newThought) => {
        // Now you have `newThought` which is the response from the
        // API as documented at the top of this readme. You can use
        // it to update the `thoughts` array: 
        setThoughts((previousThoughts) => [newThought, ...previousThoughts])

      })
  }

  return (
    <div>

      <MyThought myThought={myThought} setMyThought={setMyThought}
      />

      {
        thoughts.map(json =>
          <div className="thoughts-card" key={json._id}>{json.message} {json.hearts} {json.createdAt}</div>
        )
      }
    </div >
  )
}

