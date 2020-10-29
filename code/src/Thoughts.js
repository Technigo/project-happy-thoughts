import React, { useEffect, useState } from "react";

import {ThoughtForm} from "./ThoughtForm";
import {ThoughtBox} from "./ThoughtBox";
import {THOUGHTS_URL} from "./urls";

export const Thoughts = () => {
    const [thoughts, setThoughts] = useState([]);  

    useEffect(() => {
        getMessages();
    }, [])

    const getMessages = () => {
        fetch(THOUGHTS_URL)
        .then(res => res.json())
        .then(json => setThoughts(json));
    }

    const postMessage = myThought => {
        fetch(THOUGHTS_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({message: myThought})
        })
        .then(() => getMessages())
    }


    return (
        <section>
            <ThoughtForm 
                onMyThoughtChange={postMessage}
                />
            {thoughts.map(thought => (
                <ThoughtBox 
                    key={thought._id} 
                    thought={thought} 
                    getMessages={getMessages}
                    />
            ))}    
            {/* <ThoughtList 
                thoughts={thoughts}
                onIsLikedChange={postLike}
                isLiked={isLiked}
                />             */}
        </section>
    )
}