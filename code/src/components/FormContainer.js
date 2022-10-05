import React, { useEffect, useState } from 'react'
import ThougthInput from './ThougthInput'
import ApiInput from './ApiInput'

const LIKES_URL = (likeID) => `https://happy-thoughts-technigo.herokuapp.com/thoughts/${likeID}/like`

const FormContainer = () => {
  const [newThougth, setNewThugth] = useState('');
  const [ApiThougth, setApiThougth] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = () => {
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
      .then((Response) => Response.json())
      .then((data) => setApiThougth(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
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
        'Content-Type': 'application/json'
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

  /* Add likes to messages  */

  const handleOnlikeChange = (likeID) => {
    const test = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    fetch(LIKES_URL(likeID), test)
      .then((Response) => Response.json())
      .then(console.log('likes work'))
      .catch((error) => console.error(error))
      .finally(() => getData())
  }

  return (
    <section className="container">
      <h1>hello world</h1>
      <ThougthInput
        newThougth={newThougth}
        onNewThougth={handleNewThougth}
        onSend={onSend} />
      <ApiInput
        ApiThougth={ApiThougth}
        loading={loading}
        onLikeChange={handleOnlikeChange} />
    </section>
  )
}
export default FormContainer