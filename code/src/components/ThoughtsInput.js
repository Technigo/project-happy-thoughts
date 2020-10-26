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
        <form onSubmit = {handleSubmit}>
            <input 
                type="text"
                className="form-text"
                onChange= {event => setThought(event.target.value)}
                >
            </input>
            <input
                type="submit"
                className="submit-button"
                value="Add Thought">
            </input>

        </form>
    )
    }