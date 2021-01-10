import React, { useState } from 'react'

const InputFormContainer = () =>{
    const [message, setMessage] = useState("");
    const THOUGHTS_URL = "https://happy-thoughts-marjaana.herokuapp.com/thoughts";
    
    const submit = (event) => {
        event.preventDefault();

        fetch(THOUGHTS_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message }),
        })
            .then(() => {
            window.location.reload();
            });
      };


    return (
    <form onSubmit={submit} className="inputform">
        <h1>What is making you happy right now ?  </h1>
        <p className = "textarea-message" > Enter a thought with at least 5 characters </p>
        <textarea 
            className="thoughts-textarea"
            maxlenght="300" 
            type="text" 
            onChange={(event) => setMessage(event.target.value)}>
        </textarea>
        <button 
            className="input-button"
            type="submit"
            disabled={message.length < 5 || message.length > 140}> 
            <span role="img" aria-label="Heart emoji">
                &#128150; &nbsp; 
            </span>
            Send Happy Thought 
            <span role="img" aria-label="Heart emoji">
                &nbsp; &#128150;
            </span>
        </button>
    </form>
    )
};

export default InputFormContainer;