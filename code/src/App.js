import React, { useEffect, useState } from 'react'
import { API_URL } from 'urls'
import { Form } from 'Form'
import { Messages } from 'Messages'

export const App = () => {
  const [thoughts, setThoughts] = useState([])

  //Fetches the messages from the API
  useEffect(() => {
    fetchThoughts()
  }, [])

  const fetchThoughts = () => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setThoughts(data))
  }

  //POST likes into the API and fetches it
  const handleLikedThoughts = (id) => {
    const options = {
      method: 'POST',
    }
    fetch(
      `https://happy-thoughts-technigo.herokuapp.com/thoughts/${id}/like`,
      options
    )
      .then((res) => res.json())
      .then(() => {
        fetchThoughts()
      })
      .catch((error) => error)
  }

  /*const onLikeClick = async (likedId) => {
    //const updatedThought = await likedThoughts(likedId)

    const updatedMessage = thoughts.map((thought) => {
      if (thought._id === likedId) {
        thought.hearts += 1
      }
      return thought
    })

    setThoughts(updatedMessage)
  }*/

  return (
    <div className='container'>
      <div className='main'>
        <Form thoughts={thoughts} setThoughts={setThoughts} />
        <Messages
          thoughts={thoughts}
          setThoughts={setThoughts}
          onLikeClick={handleLikedThoughts}
        />
      </div>
    </div>
  )
}
