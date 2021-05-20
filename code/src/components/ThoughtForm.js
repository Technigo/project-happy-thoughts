import React from "react"
import { API_URL } from "utils/urls"

const ThoughtForm = ({ thoughts, setThoughts, newThought, setNewThought, username, setUsername }) => {

    const onFormSubmit = (event) => {
        event.preventDefault()

        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ message: newThought, userName: username })
        }

        fetch(API_URL(0), config)
            .then(res => res.json())
            .then(receivedThought => {
                if (receivedThought.error) {
                    alert(receivedThought.error)
                } else {
                    setThoughts([receivedThought, ...thoughts])
                }
            })

        setNewThought("")
        setUsername("")
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
                onChange={(e) => setNewThought(e.target.value)}
            />
            <p className={newThought.length > 140 ? "red" : ""} >{newThought.length} / 140</p>
            <label htmlFor="username-form" className="username-label">
                Name (optional)
                </label>
            <input
                id="username-form"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="username-input"
            />
            <button>
                <span role="img" aria-label="heart icon">💗</span>
                Send Happy Thought
                <span role="img" aria-label="heart icon">💗</span>
            </button>
        </form>
    )
}

export default ThoughtForm