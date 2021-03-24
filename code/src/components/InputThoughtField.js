import React, { useState, useEffect } from 'react'
import { API_URL_THOUGHTS } from '../Reusables/urls';
import './Styles/MainTextField.css'

const InputTextField = () => {
    const [thought, setThought] = useState('')

    useEffect(() => {
        setThought("JavaScript sets the value")
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
        <div>
            <form onSubmit={handleSubmit}>
                <textarea
                className="text-area"
                rows="3"
                cols ="40"
                placeholder="Write a thought"
                onChange= {event => setThought(event.target.value)}
                ></textarea>
                <p>This is length of {thought.length} / 140</p>
                <button
                type="submit"
                className="submit-btn"
                value="thought"
                //if the imput is less than 6 characters submit button will not work.
                >Send a happy thought</button>
            </form>
            <p>{thought}</p>
        </div>
    )
        
}

export default InputTextField