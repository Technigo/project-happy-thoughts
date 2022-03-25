import React, { useState, useEffect } from 'react'

import ThougthsList from 'Components/ThoughtsList'
import ThoughtsForm from 'Components/ThoughtsForm'


export const App = () => {

  const [thoughtsList, setThoughtsList] = useState ([])
  const [loading, setLoading] = useState (false)
  const [newThought, setNewThought] = useState("")

  useEffect(() => {
    fetchThoughts()    
  }, [])

  const fetchThoughts = () => {
    setLoading(true)
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
    .then(res => res.json())
    .then(data => setThoughtsList(data))
    .catch(error => console.error(error))
    .finally(() => setLoading(false))
    }

    const handleNewThoughtChange = (event) => {
    setNewThought(event.target.value)
    }

    const onThoughtSubmit = (event) => {
      event.preventDefault()

      const options = {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({message: newThought})
        }    

        

        fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts', options)                                  
        .then(res => res.json())
        .then(() => {
          fetchThoughts()
          setNewThought('')
          })
        }

        const handleLikesIncrease = (thoughtId) => {
     
          const options = {
            method: 'POST',
              }
               fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${thoughtId}/like`, options)
              .then(res => res.json())
              .then(data => {
               fetchThoughts(data)      
                })
            }
        

        return (
        <div>
        <ThoughtsForm 
          newThought={newThought} 
          onNewThoughtChange={handleNewThoughtChange} 
          onThoughtSubmit={onThoughtSubmit}
          />
          <ThougthsList 
          loading={loading} 
          thoughtsList={thoughtsList}
          onLikesIncrease={handleLikesIncrease}
          />
        </div>
    )
}
