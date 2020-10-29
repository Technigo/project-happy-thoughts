import React, { useState } from 'react'
/* 
import { INPUT_URL } from './urls' */

import './input.css'
/* The component where the user inputs a thought
POST https://happy-thoughts-technigo.herokuapp.com/thoughts
Has to be between 5-140 characters, when too long should show a nice error message 
Use conditional here to show error if unvalid input?
const [userInput, setUserInput] = useState 
*/

export const Input = ({ onMessageChange, inputType }) => {
    const [newMessage, setNewMessage] = useState('')
    
    const handleSubmit = event => {
        event.preventDefault();
        onMessageChange(newMessage);
    }

    /* const [userInput, setUserInput] = useState([]) */
/*     const INPUT__URL = 'https://happy-thoughts-technigo.herokuapp.com/thoughts' */
    

    return (
        <>
        <form onSubmit={handleSubmit} className="input__input-container">
        <label className="input__user-input">
            <input 
            type={inputType}
            value={newMessage}
            onChange={event => setNewMessage(event.target.value)}/>
        </label>
        <button type={'submit'}>Send thought!</button>
        </form>
        </>
    )
}