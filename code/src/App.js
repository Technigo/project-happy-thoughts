import React, { useState, useEffect } from 'react'

import Collection from 'components/Collection'


export const App = () => {
const [newMessage, setNewMessage] = useState('')
const [loading, setLoading] = useState(false)

useEffect(() => {
  fetchThoughts()

}, [])

const fetchThoughts = () => {
  setLoading(true)
  fetch('https://week11backend.herokuapp.com/tasks')
 .then((res) => res.json())
 .then(data => setNewMessage(data))
 .catch(error => console.error(error))
 .finally(() => setLoading(false))
}

const onFormSubmit = (event) => {
  event.preventDefault()

  const options = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify ({message: newMessage}),
  }

  fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts', options)
  .then(res => res.json())
  .then(data => console.log(data))
  .finally(() => window.location.reload())

}

const onNewMessageChange = (event) => {
  setNewMessage(event.target.value)
}



  return (
    <div>
      <Collection />
    </div>
  )
}
