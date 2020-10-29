import React, {useState} from "react";

export const ThoughtForm = ({onMyThoughtChange}) => {
    const [myThought, setMyThought] = useState("");

    const handleFormSubmit = (event) => {
        event.preventDefault();
        setMyThought("");
        onMyThoughtChange(myThought);
    }

    return(
        <div className="form-box">
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="mythought-input">
                What's making you happy right now?
                <textarea 
                    id="mythought-input"
                    rows="3"
                    value={myThought}
                    onChange={event => setMyThought(event.target.value)}
                    ></textarea>
                </label>
                <button 
                    className="send-thought" 
                    type="submit"
                    disabled={myThought.length < 6 || myThought.length > 140 ? true : false}
                >❤️ Send Happy Thought ❤️</button>
            </form>
        </div>
    )
}