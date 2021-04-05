import React, { useState, useEffect } from 'react'
import { API_URL_THOUGHTS } from '../Reusables/urls';
import './Styles/InputThoughtField.css'

const InputTextField = () => {
    const [thought, setThought] = useState('')

    useEffect(() => {
        setThought("")
    }, [])

    const handleSubmit = (event) =>{
        event.preventDefault();

        fetch(API_URL_THOUGHTS, {
            method: "POST",
            headers:
                {"Content-Type": "application/json"},
                body: JSON.stringify({
                    message: thought
                })
                }
                ).then(() =>{
                    setThought("");
                    //refresh page, the thought is visible in list 
                    window.location.reload();
                })
    }

    return ( 
        <div className="input-thought-wrapper">
            <form onSubmit={handleSubmit}>
                <textarea
                className="input-text-area"
                placeholder="Write a happy thought..."
                onChange= {event => setThought(event.target.value)}
                ></textarea>
                <p className ={thought.length >= 140 ? 'thought-length-long': 'thought-length-ok'}>{thought.length} / 140</p>
                <button
                type="submit"
                className="submit-btn"
                value="thought"
                minlength="3"
                > <span role='button' aria-label='heart'>❤️</span>
                    Send a happy thought
                  <span role='button' aria-label='heart'>❤️</span>
                </button>
            </form>
        </div>
    )
        
}

export default InputTextField