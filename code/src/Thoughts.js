import React, { useEffect, useState } from "react";

import {ThoughtForm} from "./ThoughtForm"
import {ThoughtList} from "./ThoughtList"

export const Thoughts = () => {
    const [thoughts, setThoughts] = useState([]);
    const THOUGHTS_URL = "https://happy-thoughts-technigo.herokuapp.com/thoughts";

    useEffect(() => {
        fetch(THOUGHTS_URL)
            .then(res => res.json())
            .then(json => setThoughts(json))
    })

    return (
        <section>
            <ThoughtForm 
                thoughtsUrl={THOUGHTS_URL}
                />
            <ThoughtList 
                thoughts={thoughts}
                />            
        </section>
    )
}