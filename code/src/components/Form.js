import React, { useState, useEffect } from 'react'

import Recent from './Recent'
import Create from './Create'

const Form = () => {

    const [newThought, setnewThought] = useState('');
    const [thoughts, setThoughts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchThoughts();
    }, [])

    const fetchThoughts = () => {
        setLoading(true)
        fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
        .then(res => res.json())
        .then(json => setThoughts(json))
        .catch(error => console.error(error))
        .finally(() => setLoading(false))
    }

    const handleNewThoughtChange = (event) => {
        setnewThought(event.target.value)
    }

    const onFormSubmit = (event) => {
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
    
        fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts', options)
        .then(res => res.json())
        .then(data => fetchThoughts())
        .finally(() => setnewThought(''))
    }
//start kopierad

//     const onLikePost = (event) => {
//         event.preventDefault()
    
//         const options = {
//           method: 'POST',
//           headers: {'Content-Type': 'application/json'},
//         }
    
//         fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${id}/like`, options)
//         .then(res => res.json())
//         .then(data => console.log(data))
      
//     }
// // slut på kopierad (obs..backticksen på rad 57) vad händer vid klicket, 
// //addera counter och koppla till hjärtat. setstate-historia
    

    return (
      <div className='form-box'>
        <Create 
          newThought={newThought} 
          onNewThoughtChange={handleNewThoughtChange} 
          onFormSubmit={onFormSubmit} 
        //   onLikePost={onLikePost}
        />
        <Recent 
          loading={loading} 
          thoughts={thoughts}
        />
      </div>
    )
}

export default Form