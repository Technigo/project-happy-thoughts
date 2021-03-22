import React, { useState } from 'react'
import { API_URL_THOUGHTS } from '../Reusables/urls';
import './Styles/MainTextField.css'

const InputTextField = () => {
    const [thought, setThought] = useState('')

    const handleSubmit = (event) =>{
        event.preventDefault();

        fetch(API_URL_THOUGHTS, {
            method: "POST",
            headers:
                {"Content-Type": "application/json"},
                body:JSON.stringify({message: thought
                }
                ).then(() =>{
                    setThought("");
                })
    
        })
    }
        
}

export default InputTextField