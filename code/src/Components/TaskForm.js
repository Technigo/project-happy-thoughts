import React, {useState, useEffect} from 'react'
import ThoughtElement from './ThoughtElements';
import ThoughtForm from './ThoughtForm';




export const TaskForm = () => {
  const [thought, setThoughts] = useState([]);
  const [newMessages, setNewMessages] = useState('');

  const handleOnNewThought = (event) => {
    setNewMessages(event.target.value)
  }

  useEffect(() => {
    getThoughts()
  },[]);


  const getThoughts = () => {
      // setLoading(true);
      fetch('https://projecthappythoughtsapi.herokuapp.com/thoughts')
      .then(res => res.json())
      .then(data => setThoughts(data))
      // .finally(() => setLoading(false))
  
  }

  const handleOnFormSubmit = (event) => {
    event.preventDefault();

    const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            message: newMessages
        })
      }

    fetch('https://projecthappythoughtsapi.herokuapp.com/thoughts', options)
    .then(res => res.json())
    .then(() => getThoughts())
    .finally(()=> setNewMessages(''))
      
  }


   const handleLike = (_id) => {

        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        }
            fetch(`https://projecthappythoughtsapi.herokuapp.com/thoughts/${_id}/like`, options)
              .then((res) => res.json())
              .then(() =>  getThoughts())
        }  

                  
  return (
    
    <div>
            <ThoughtForm
              onFormSubmit={handleOnFormSubmit}
              newMessages={newMessages}
              onSetThoughtChange={handleOnNewThought}
                
            />
    
  
    {thought.map((thoughts) => (
              <ThoughtElement
                  key={thoughts._id}
                  thought={thoughts}
                  handleLike={handleLike}
              />
            ))}
    </div>
    
  )
  }  
