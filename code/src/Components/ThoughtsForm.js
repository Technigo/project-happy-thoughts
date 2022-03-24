import React, { useState } from 'react'

const ThoughtsForm = () => {
    const [newThought, setNewThought] = useState("")

    const onNewThoughtChange = (event) => {
        setNewThought(event.target.value)
    }

    const onThoughtSubmit = (event) => {
        event.preventDefault()

    const options = {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({message: newThought})
    }    

        fetch("https://happy-thoughts-technigo.herokuapp.com/thoughts",options)
        .then(res => res.json)
        .then(data => console.log(data))
    }

    return (
        <form onSubmit={onThoughtSubmit}>
            <h1>What is making you happy right now?</h1>
            <textarea value={newThought} onChange={onNewThoughtChange} />
            <button type="submit"> Send Happy Thought</button>
        </form>
    )
    


}

export default ThoughtsForm