import React, { useEffect, useState } from 'react'
import ThougthInput from './ThougthInput'
import ApiInput from './ApiInput'

export const FormContainer = () => {
  const [newThougth, setNewThugth] = useState([]);
  const [ApiThougth, setApiThougth] = useState([]);

  const getData = () => {
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
      .then((Response) => Response.json())
      .then((data) => setApiThougth(data))
      .catch((error) => console.error(error))
      /* .finally(() => ) */
  }
  useEffect(() => {
    getData();
  }, [])

  const handleNewThougth = (event) => {
    setNewThugth(event.target.value)
  }
  const onSend = (event) => {
    event.preventDefault();
    const test = {
      method: 'POST',
      headers: {
        'content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: newThougth
      })
    }
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts', test)
      .then((Response) => Response.json())
      .then(() => getData())
      .finally(() => setNewThugth(''))
  }

  return (
    <section className="container">
      <h1>hello world</h1>
      <ThougthInput
        newThougth={newThougth}
        onNewThougth={handleNewThougth}
        onSend={onSend} />
      <ApiInput
        ApiThougth={ApiThougth} />
    </section>
  )
}
