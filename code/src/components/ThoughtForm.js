import React from "react"
import { API_URL } from "utils/urls"

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
            .then(receivedThought => {
                if (receivedThought.message === "Could not save thought") {
                    alert("Oops, your thought could not be posted. Remember that your post has to be between 5 and 140 characters long. Try again!")
                } else {
                    setThoughts([receivedThought, ...thoughts])
                }
            })
            .catch(err => console.log(err))

        setNewThought("")
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
            <p className={newThought.length > 140 ? "red" : ""} >{newThought.length} / 140</p>
            <button>
                <span role="img" aria-label="heart icon">💗</span>
                Send Happy Thought
                <span role="img" aria-label="heart icon">💗</span>
            </button>
        </form>
    )
}

export default ThoughtForm