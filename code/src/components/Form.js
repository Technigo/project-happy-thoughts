import React, { useState } from 'react';
import { API_URL } from '../utils/urls';

export const Form = () => {

    /*new thought is the value from input*
    setNewThought function, sets value to the newThought*/
	const [newThought, setNewThought] = useState("");

    const fetchRequest = () => {
        const options = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
            }, 
            body: JSON.stringify({message: newThought})
        }

        /* Fetch to post a new message*/
        fetch(API_URL, options)
        .then(res => res.json())
        /* publishes new message and then reaload page*/
        .then(() => { window.location.reload()});
    }

    const onFormSubmit = (event) => {
        event.preventDefault()
        fetchRequest()
    };


    return (
        <form onSubmit={onFormSubmit} className="form" >
            <label htmlFor="newThought">What makes you happy?</label>
            <textarea 
                id="newThought"
                type="text" 
                maxLength="140"
                value={newThought}
                onChange={(e) => setNewThought(e.target.value)}
                />
            <button type="submit">Send</button>
        </form>
    )
};


