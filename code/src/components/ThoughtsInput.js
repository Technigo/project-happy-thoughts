import React, { useState } from "react"

export const ThoughtsInput = () => {
    const ThoughtsUrl= "https://happy-thoughts-technigo.herokuapp.com/thoughts";

    // state to save the message to send to the backend 
    const [thought, setThought] = useState("")
    // input text field
    //submit button
    
    const handleSubmit = (event) => { 
        event.preventDefault();
        console.log(JSON.stringify({text: thought}))

        // submit function that POSTs the text field 
        fetch(ThoughtsUrl, {
            method: "POST",
            headers:
            {
                "Content-Type":"application/json"
            },
            body:JSON.stringify({message: thought})
        }
        ).then(() => {
            // ask the page to refresh 
            window.location.reload();
        });

    };

    return ( 
        <div className="input-form">
            <form onSubmit = {handleSubmit}>
                <p className="form-title">What's making you happy right now?</p>
                <input 
                    type="text"
                    className="text-area"
                    maxLength="140"
                    onChange= {event => setThought(event.target.value)}
                    >
                </input>
                <button
                    type="submit"
                    className="submit-button"
                    value="Add Thought">
                    <span role="img" aria-label="Heart emoji">💗 </span> 
                        Send Happy Thought
                    <span role="img" aria-label="Heart emoji"> 💗</span>
                </button>

            </form>
        </div>
    )
    }