import React, { useState } from 'react';

export const Thoughts = () => {
    const [thought, setThought] = useState("");

    const handleSubmit = event => {
        event.preventDefault();
        fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts',
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message: thought })
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
                        rows='3'
                        type="text"
                        value={thought}
                        className="form-text"
                        onChange={event => setThought(event.target.value)}>
                            
                    </input><br></br>
                    <div className="button-container">
                        <input
                            type="submit"
                            className="form-button"
                            value="❤️ Send Happy Thought ❤️"
                            onClick={handleSubmit}
                            disabled={thought.length < 6 || thought.lenght > 140 ? true : false}>
                        </input>
                    </div>
                </form></div></div>
    )
}