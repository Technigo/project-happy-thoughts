import React, { useState, useEffect } from 'react'
import ThoughtForm from './ThoughtForm'




// Creating HappyThoughtsCards, fetching thoughts data
const HappyThoughtCards = () => {
    const [thoughts, setThoughts] = useState([])

    useEffect (() => {
        fetch("https://happy-thoughts-technigo.herokuapp.com/thoughts")
        .then(res => res.json())
        .then(thoughts => setThoughts(thoughts))
}, [])

console.log('thoughts', thoughts)
console.log('setThoughts', setThoughts)

// Adding ThoughtForm, getting all the latest thoughts through mapping
return (

    <>
        <ThoughtForm setThoughts={setThoughts} />

    <div>
  
            {thoughts.map((thought, index) => (
                <div className='thought-box' key={index}>{thought.message}</div>
            ))
            }
           
    </div>

    </>

)
}

export default HappyThoughtCards

