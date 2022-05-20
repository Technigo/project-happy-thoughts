import React, {useState, useEffect} from 'react'
import { API_HEART, API_LIST } from './components/Api'
import ThoughtList from 'components/ThoughtList'
import ThoughtForm from 'components/ThoughtForm'



export const App = () => {

    const [thoughtList, setThoughtList] = useState([])
    // const [loading, setLoading] = useState(false) - never used due loading on likes
    const [newThought, setNewThought] = useState ('')

    useEffect(() => {
      fetchThoughts();
    }, []);
  
    //fetch 20 latest thoughts
    const fetchThoughts = () => {
      // setLoading(true)
      fetch(API_LIST)
        .then((res) => res.json())
        .then((data) => setThoughtList(data.response))
        // .finally (() => setLoading(false))
    }
    //Set and post new thought
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
    //Update like via thought id
    const handleHeartLikes = (thoughtID) => {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      }
  
      fetch(API_HEART(thoughtID), options)
        .then((res) => res.json())
        .then(() => {
          fetchThoughts()
        })
    }   

  return (
    <main>
      {/* {loading && <Loading />} */}
      <ThoughtForm
        newThought={newThought}
        handleNewThought={handleNewThought}
        handleFormSubmit={handleFormSubmit}
      />
      <ThoughtList
        thoughtList={thoughtList}
        handleHeartLikes={handleHeartLikes}
      />
    </main>
  )
}
