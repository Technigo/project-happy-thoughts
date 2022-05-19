import React, { useState } from "react"


const PostThoughts = () => {
    const [newThought, setNewThought] = useState("");
    const [charCount, setCharCount] = useState(0)

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

        fetch("https://happy-thoughts-api-rawi.herokuapp.com/thoughts", options)
            .then((res) => res.json())
            .then(() => {
                window.location.reload(true)
            })
    }

    const onCharCountValueChange = (event) => {
        setNewThought(event.target.value)
        setCharCount(event.target.value.length)
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
                            onChange={onCharCountValueChange}
                            maxLength="140"
                        />
                    </label>
                    <button 
                      className="send-btn" 
                      type="submit" 
                      onSubmit={onThoughtSubmit}
                      disabled={charCount < 5}
                    >
                       <span role="img" aria-label="heart emoji">💖</span> Send Happy Thoughts <span role="img" aria-label="heart emoji">💖</span>
                    </button>
                    <span className="char-count">{charCount}/140</span>
                </form>
            </div>
        </section>
    )
}

export default PostThoughts 