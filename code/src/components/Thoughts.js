import React, { useState } from 'react';

export const Thoughts = () => {
    const [thought, setThought] = useState("");
    
    const handleSubmit = event => {
        event.preventDefault();
        

        fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts',
            {
                method:"POST",
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({message: thought})
            }
        ).then(() => {
         window.location.reload();
        })
    };
    return (
        <div className="thought-container">
            <div className="thoughts">
        <form onSubmit={handleSubmit}>
            <div className="rubrik">What´s making you happy right now?</div>
            <input
                type="text"
                value={thought}
                className="form-text"
                onChange={event => setThought(event.target.value)}>
                </input><br></br>
                <input
                type="submit"
                className="form-button"
                value="❤️ Send Happy Thought ❤️">
                </input>
        </form></div></div>
    )
}