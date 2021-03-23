import React, { useEffect, useState } from "react"
import API_URL from "utils/urls"

const ThoughtForm = ({ thoughts, setThoughts, newThought, setNewThought }) => {
    const [isOver140, setIsOver140] = useState(<p> {140 - newThought.length} characters remaining</p>)

    const onNewThoughtChange = (event) => {
        setNewThought(event.target.value)
        if (newThought.length > 140) {
            setIsOver140(<p className="red" >0 characters remaining</p >)
        } else {
            setIsOver140(<p> {140 - newThought.length} characters remaining</p>)
        }
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
                maxLength="140"
                value={newThought}
                onChange={onNewThoughtChange}
            />
            {isOver140}
            <button>❤ Send Happy Thought ❤</button>
        </form>
    )
}

export default ThoughtForm