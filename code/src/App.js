import React, { useState, useEffect } from 'react'
import Thoughts from 'Thoughts'
import { API_URL } from 'Urls'

export const App = () => {
  const [thoughts, setThoughts] = useState ([])

  useEffect(() => {
    fetchThoughts()
  })

  const fetchThoughts = () => {
    fetch(API_URL)
      .then(res => res.json())
      .then(json => setThoughts(json))
  }  

  return (
    <main>
      <Thoughts 
        thoughts={thoughts}
        setThoughts={setThoughts}
      />
    </main>
  )
}

