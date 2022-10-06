import React, { useEffect, useState } from 'react'
import ThougthInput from './ThougthInput'
import ApiInput from './ApiInput'

const LIKES_URL = (LikeID) => `https://happy-thoughts-technigo.herokuapp.com/thoughts/${LikeID}/like`

const FormContainer = () => {
  const [newThought, setNewThought] = useState('');
  const [ApiThought, setApiThought] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = () => {
    setLoading(true)
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
      .then((Response) => Response.json())
      .then((data) => setApiThought(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
  }
  useEffect(() => {
    getData();
  }, [])

  const handleNewThought = (event) => {
    setNewThought(event.target.value)
  }

  const onSend = (event) => {
    event.preventDefault();
    const test = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: newThought
      })
    }
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts', test)
      .then((Response) => Response.json())
      .then(() => getData())
      .finally(() => setNewThought(''))
  }

  /* Add likes to messages  */

  const handleOnlikeChange = (LikeID) => {
    const test = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    fetch(LIKES_URL(LikeID), test)
      .then((Response) => Response.json())
      .then(console.log('yey it works.'))
      .catch((error) => console.error(error))
      .finally(() => getData())
  }

  return (
    <section className="container">
      <ThougthInput
        newThought={newThought}
        onNewThought={handleNewThought}
        onSend={onSend} />
      <ApiInput
        ApiThought={ApiThought}
        loading={loading}
        handleOnlikeChange={handleOnlikeChange} />
    </section>
  )
}
export default FormContainer