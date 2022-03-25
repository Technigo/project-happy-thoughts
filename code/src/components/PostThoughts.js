import React, { useState } from "react"


const PostThoughts = () => {
    const [newThought, setNewThought] = useState("");

    const onThoughtSubmit = (event) => {

        event.preventDefault();

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                message: newThought
            })
        };

        fetch("https://happy-thoughts-technigo.herokuapp.com/thoughts", options)
            .then((res) => res.json())
            .then(() => {
                window.location.reload(true)
            })
    }

    return (
        <section>
            <div className="post-thought-container">
                <h2>What's making you happy right now?</h2>
                <form className="post-thought-form" onSubmit={onThoughtSubmit}>
                    <label htmlFor="thought">
                        <textarea
                            value={newThought}
                            placeholder="...makes me happy"
                            name="thought"
                            onChange={(event) => setNewThought(event.target.value)}
                            maxLength="140"
                        />
                    </label>
                    <button 
                      className="send-btn" 
                      type="submit" 
                      onSubmit={onThoughtSubmit}
                    >
                       <span role="img" aria-label="heart emoji">💖</span> Send Happy Thoughts <span role="img" aria-label="heart emoji">💖</span>
                    </button>
                </form>
            </div>
        </section>
    )
}

export default PostThoughts 