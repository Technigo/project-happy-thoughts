import React, {useState} from "react";
import {THOUGHTS_URL} from "./urls";

export const ThoughtForm = ({getMessages}) => {
    const [myThought, setMyThought] = useState("");

    //will send a new message to the API and get the latest data from the APi again
    const postMessage = myThought => {
        fetch(THOUGHTS_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({message: myThought})
        })
        .then(() => getMessages());
    };
    
    const handleFormSubmit = (event) => {
        event.preventDefault();
        setMyThought("");
        postMessage(myThought);
    };

    return (
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
                >
                    <span role="img" aria-label="heart"> 
                        {" ❤️ "}
                    </span> 
                     Send Happy Thought 
                    <span role="img" aria-label="heart"> 
                        {" ❤️ "}
                    </span>
                </button>
            </form>
        </div>
    );
};