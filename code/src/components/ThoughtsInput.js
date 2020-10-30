import React, { useState } from "react";

import HeartImage from "../assets/heart.png";



export const ThoughtsInput = () => {
    const ThoughtsUrl= "https://happy-thoughts-technigo.herokuapp.com/thoughts";

    // state to save the message to send to the backend 
    const [thought, setThought] = useState("")
    // input text field
    //submit button
    
    const handleSubmit = (event) => { 
        event.preventDefault();
        // submit function that POSTs the text field 
        fetch(ThoughtsUrl, {
            method: "POST",
            headers:
            {"Content-Type":"application/json"},
            body:JSON.stringify({message: thought})
        }
        ).then(() => {
            // ask the page to refresh 
            setThought("");
            window.location.reload();
        });
    };

    return ( 
        <>
            <div className="header">
                <h1>
                    <img className="pixel-heart" src={HeartImage} alt="pixel heart"/>
                    Happy Thoughts
                    <img className="pixel-heart" src={HeartImage} alt="pixel heart"/>
                </h1>
            </div>
            <div className="input-form">
                <form onSubmit={handleSubmit}>
                    <p className="form-title">What's making you happy right now?</p>
                    <textarea
                        className="text-area"
                        rows="3"
                        placeholder="Write a happy thought!"
                        onChange= {event => setThought(event.target.value)}
                        >
                    </textarea>
                    <button
                        type="submit"
                        className="submit-button"
                        value="thought"
                        disabled={thought.length < 6 || thought.length > 140 ? true : false}  
                        >
                        <span role="img" aria-label="Heart emoji">{"❤️"} </span> 
                            Send Happy Thought
                        <span role="img" aria-label="Heart emoji"> {"❤️"} </span>
                    </button>
                    <p className="thoughts-chars"> {thought.length} /140 </p>
                </form>
            </div>
        </>
    )
    }