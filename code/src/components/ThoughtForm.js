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
        <div>
            <form onSubmit={onFormSubmit}>
                <label>
                    What's making you happy right now?
                    <input
                        type="text"
                        value={newThought}
                        onChange={onNewThoughtChange}
                    />
                </label>
                <button>Send Happy Thought</button>
            </form>
        </div>)
}

export default ThoughtForm