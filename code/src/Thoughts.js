import React, { useEffect, useState } from "react"

export const Thoughts = () => {
    const [thoughts, setThoughts] = useState([])

    useEffect(() => {
        fetch("https://happy-thoughts-technigo.herokuapp.com/thoughts")
            .then(res => res.json())
            .then(json => setThoughts(json))
    })

    return (
        <section>
            <div className="thoughts-container">
                {thoughts.map((thought) => <p>{thought.message}</p>)}
            </div>
            
        </section>
    )
}