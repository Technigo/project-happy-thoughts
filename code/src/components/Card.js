import React, { useState, useEffect } from 'react'
import moment from 'moment'
import './card.css'

const MESSAGES_URL = "https://technigo-thoughts.herokuapp.com/";

export const Card = ({ thought, onLiked }) => {
    const { hearts, _id } = thought
    const [thoughts, setThoughts] = useState([]);

    const handleClick = () => {
        fetch(`https://technigo-thoughts.herokuapp.com/${_id}/like`, {
            method: 'POST',
            body: '',
            headers: { 'Content-Type': 'application/json' }
        }).then(() => onLiked(_id))
        console.log('from handleclick',_id)

    }

    useEffect(() => {
        // Ask the server for the messages using a GET requests
        fetch(MESSAGES_URL)
            .then((res) => {
                // Get the JSON of the response body
                return res.json()
            })
            .then(data => {
                // Set the state based on the response reversed setThoughts(data.reverse());
                setThoughts(data.sort());

            });
    }, []);


    return (
        <article>
            {
                
                    <p className="message card" key={thought._id}>
                        {thought.message}
                        <button
                        onClick={handleClick}
                        className={
                            hearts > 5 ? 'heart superLiked' : hearts > 0 ? ' heart liked' : 'heart send-like'
                        }
                        >
                        <span role='img' aria-label='Heart'>❤️</span>
                        </button> x {thought.hearts}

                        <span className="message-time">
                            {moment(thought.createdAt).fromNow()}
                        </span>
                    </p>
                
            }
        </article>
    )
}