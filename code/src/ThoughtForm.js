import React, {useState} from "react";

export const ThoughtForm = ({onMyThoughtChange}) => {
    const [myThought, setMyThought] = useState("");

    const handleFormSubmit = (event) => {
        event.preventDefault();
        setMyThought("");
        onMyThoughtChange(myThought);
    }

    return(
        <form onSubmit={handleFormSubmit}>
            <input 
                type="text"
                value={myThought}
                onChange={event => setMyThought(event.target.value)}
                >
            </input>
            <button type="submit">Submit thought</button>
        </form>
    )
}