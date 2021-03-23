import React from "react"
import API_URL from "utils/urls"

const ThoughtForm = ({ thoughts, setThoughts, newThought, setNewThought }) => {

    const onNewThoughtChange = (event) => {
        setNewThought(event.target.value)
    }

    const onFormSubmit = (event) => {
        event.preventDefault()

        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ message: newThought })
        }

        fetch(API_URL, config)
            .then(res => res.json())
            .then(receivedThought => setThoughts([receivedThought, ...thoughts]))
            .catch(err => console.log(err))
    }

    return (
        <form onSubmit={onFormSubmit}>
            <label htmlFor="thought-form">
                What's making you happy right now?
                </label>
            <input
                id="thought-form"
                type="text"
                value={newThought}
                onChange={onNewThoughtChange}
            />
            <button>❤ Send Happy Thought ❤</button>
        </form>
    )
}

export default ThoughtForm