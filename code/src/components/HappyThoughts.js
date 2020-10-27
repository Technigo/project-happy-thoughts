import React, { useEffect } from 'react'
import { useState } from 'react'
import moment from 'moment'

//This function makes all the messages to appear in a list
export const HappyThoughts = () =>  {
    const THOUGHTS_URL ='https://happy-thoughts-technigo.herokuapp.com/thoughts';
    const [thoughts, setThoughts] = useState([]);

    useEffect(() => {
    fetch(THOUGHTS_URL)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        console.log(data);
        setThoughts(data);
    });
    }, []);

    //the map function here makes every thought-card show each individual message and a heart button.
    return (
    <div className='thoughts-card'>{thoughts.map(message => {
        return (
            <p className='message' key={message._id}>
            {message.message}
            <span className='message-time'>
            {moment(message.createdAt).fromNow()}
            </span>
            <button
            className='like-button'>            
            <span role='img' aria-label='heart'>❤️ </span>
            </button>
            </p>
        );
        
        })};
    </div>
    );
    };