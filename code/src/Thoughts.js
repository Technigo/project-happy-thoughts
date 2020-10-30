import React, {useEffect, useState} from "react";

import {ThoughtForm} from "./ThoughtForm";
import {ThoughtBox} from "./ThoughtBox";
import {THOUGHTS_URL} from "./urls";

export const Thoughts = () => {
    const [thoughts, setThoughts] = useState([]);  

    //will execute the getMessages-function when Thoughts-component is mounted
    useEffect(() => {
        getMessages();
    }, []);

    //will fetch an array with messages from the API and update the thought-state with this data
    const getMessages = () => {
        fetch(THOUGHTS_URL)
        .then(res => res.json())
        .then(json => setThoughts(json));
    };

    return (
        <section className="thought-section">
            <ThoughtForm 
                getMessages={getMessages}
            />    
            {thoughts.map(thought => ( //maps through the thoughts-array and renders a box for each one
                <ThoughtBox 
                    key={thought._id} 
                    thought={thought} 
                    getMessages={getMessages}
                />
            ))}    
        </section>
    );
};