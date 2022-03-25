import React, { useState } from "react"


const PostThoughts = ({ thoughts, setThoughts, fetchAllThoughts }) => {
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
                <h1>What's making you happy right now?</h1>
                <form className="post-thought-form" onSubmit={onThoughtSubmit}>
                    <label htmlFor="thought">
                        <textarea
                            value={newThought}
                            placeholder="What's your happy thought?"
                            name="thought"
                            onChange={(event) => setNewThought(event.target.value)}
                        />
                    </label>
                    <button className="send-btn" type="submit" onSubmit={onThoughtSubmit}>Send Happy Thoughts</button>
                </form>
            </div>
        </section>
    )
}

export default PostThoughts 