import React, { useState } from "react"


const PostThoughts = () => {

    const [newThought, setNewThought] = useState("");

    const onNewThoughtChange = (event) => {
        setNewThought(event.target.value);
    };

    const onThoughtSubmit = (event) => {
        event.preventDefault();

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                description: newThought
            })
        };

        fetch("https://happy-thoughts-technigo.herokuapp.com/thoughts", options)
            .then((res) => res.json())
            .then((data) => console.log(data));
    }

    return (
        <section>
            <div className="post-thought-container">
                <h1>What's making you happy right now?</h1>
                <form className="post-thought-form" onSubmit={onThoughtSubmit}>
                    <label htmlFor="thought">
                        <textarea
                            rows="3"
                            placeholder="What's your happy thought?"
                            name="thoughtt"
                            onChange={onNewThoughtChange}
                        />
                    </label>
                    </form>
                    <button className="send-btn" type="submit">Send Happy Thoughts</button>

                    
            </div>
        </section>
    )
}

export default PostThoughts 