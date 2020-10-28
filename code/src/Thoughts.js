import React, { useEffect, useState } from "react";

import {ThoughtForm} from "./ThoughtForm";
import {ThoughtList} from "./ThoughtList";
import {THOUGHTS_URL} from "./urls";

export const Thoughts = () => {
    const [thoughts, setThoughts] = useState([]);
    const [isLiked, setIsLiked] = useState(false);

    useEffect(() => {
        getMessages();
    })

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


    const handleIsLikedChange = () => {
        setIsLiked(true)
    }



    return (
        <section>
            <ThoughtForm 
                onMyThoughtChange={postMessage}
                />
            <ThoughtList 
                thoughts={thoughts}
                onIsLikedChange={handleIsLikedChange}
                isLiked={isLiked}
                />            
        </section>
    )
}