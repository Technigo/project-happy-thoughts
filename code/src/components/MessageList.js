import React, { useState, useEffect } from 'react'
import moment from 'moment';

export const MessageList = props => {
    const MESSAGES_URL = "https://technigo-thoughts.herokuapp.com/";
    const [thoughts, setThoughts] = useState([]);

    useEffect(() => {
        // Ask the server for the messages using a GET requests
        fetch(MESSAGES_URL)
            .then((res) => {
                // Get the JSON of the response body
                return res.json() 
            })
            .then(data => {
                // Set the state based on the response
                setThoughts(data.reverse());
                console.log(data)
            });
    }, []);


    return (
        <div>
            {
                // Add a section for each message returned by the backend
                thoughts.map(thought => (
                    <p className="message" key={thought._id}>
                        {thought.message}
                        <span className="message-time">
                            {moment(thought.createdAt).fromNow()}
                        </span>
                    </p>
                ))
            }
        </div>
    )
}