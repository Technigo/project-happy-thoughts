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


    return (
        <section className="thought-section">
            <ThoughtForm 
                onMyThoughtChange={postMessage}
            />    
            {thoughts.map(thought => ( //maps through the thoughts-array and renders a box for each one
                <ThoughtBox 
                    key={thought._id} 
                    thought={thought} 
                    getMessages={getMessages}
                />
            ))};    
        </section>
    );
};