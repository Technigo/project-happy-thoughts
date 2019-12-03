import React, { useState, useEffect } from "react"
import { HeartButton } from "./HeartButton"


export const ThoughtList = () => {

    const [thoughts, setThoughts] = useState([])


    useEffect(() => {
        fetch("https://technigo-thoughts.herokuapp.com/", {
            method: "GET",
        })
            .then(res => res.json())
            .then(json => { setThoughts(json) })
            .catch(error => console.error("Error:", error))
    }, []);

    return (

        <div>

            {thoughts.map((thought) => {
                let now = new Date()
                let thoughtTime = new Date(thought.createdAt)
                let elapsedTime = Math.round(((now.getTime() - thoughtTime.getTime()) / 1000))

                return (
                    <div className="thought-card" key={thought._id}>
                        <div className="message">
                            {thought.message}
                        </div>

                        <div className="card-bottom">
                            <div className="like-btn">
                                <HeartButton id={thought._id} />
                                <span> x {thought.hearts} </span>
                            </div>

                            <div className="elapsed-time">
                                <span>{elapsedTime} seconds ago</span>
                            </div>
                        </div>

                    </div>

                )
            })}



        </div >



    )
}
