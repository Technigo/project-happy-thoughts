import React, {useState, useEffect} from 'react'
import { API_HEART, API_LIST } from './components/Api'
import ThoughtList from 'components/ThoughtList'
import ThoughtForm from 'components/ThoughtForm'



export const App = () => {

    const [thoughtList, setThoughtList] = useState([])
    const [loading, setLoading] =useState(false)
    const [newThought, setNewThought] = useState ('')

    useEffect(() => {
      fetchThoughts();
    }, []);
      
    const fetchThoughts = () => {
      setLoading(true)
      fetch(API_LIST)
        .then((res) => res.json())
        .then((data) => setThoughtList(data))
        .finally (() => setLoading(false))
    }

    const handleNewThought = (event) => {
      setNewThought(event.target.value)
    }

    const handleFormSubmit = (event) => {
      event.preventDefault()
    
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              message: newThought
          })
        }

        fetch(API_LIST, options)
          .then(res =>res.json())
          .then(() => fetchThoughts())
          .finally(() => setNewThought(''))
    }

    const handleHeartLikes = (thoughtID) => {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      }
  
      fetch(API_HEART(thoughtID), options)
        .then((res) => res.json())
        .then(() => fetchThoughts())
      }   

  return (
    <div>
      <ThoughtForm
        newThought={newThought}
        handleNewThought={handleNewThought}
        handleFormSubmit={handleFormSubmit}
      />
      <ThoughtList
        loading={loading}
        thoughtList={thoughtList}
        handleHeartLikes={handleHeartLikes}
      />
    </div>
  )
}
