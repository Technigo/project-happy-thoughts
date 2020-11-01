import React, { useEffect, useState } from 'react'
import moment from 'moment'

import { LikeButton } from "./LikeButton"
//This function makes all the happy-thought messages to appear
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

    const onThoughtLiked = (id) => {
        const updatedThoughts = thoughts.map((thought) => {
          if (thought._id === id) {
            thought.hearts += 1
          }
          return thought
        })
        setThoughts(updatedThoughts);
      }

    return (
    <div className='thoughts-card'>{thoughts.map(message => {
        return (
            <div className='message' key={message._id}>
            {message.message}
            <span className='message-time'>
            {moment(message.createdAt).fromNow()}
            </span>
            <LikeButton
                key={message._id}
                id={message._id}
                onThoughtLiked={onThoughtLiked}
                hearts={message.hearts}
              />     
            </div>
        );
        
        })};
    </div>
    );
    };