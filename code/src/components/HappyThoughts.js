import React, { useEffect, useState } from 'react'
import moment from 'moment'

import { LikeButton } from "./LikeButton"
//This function fetches all the happy thoughts:
export const HappyThoughts = () =>  {
    const THOUGHTS_URL ='https://happy-thoughts-ingela.herokuapp.com/thoughts'
    //Technigos API: 'https://happy-thoughts-technigo.herokuapp.com/thoughts'
    
    const [thoughts, setThoughts] = useState([])

    useEffect(() => {
      fetch(THOUGHTS_URL)
      .then((res) => {
        return res.json()
    })
      .then((data) => {
        setThoughts(data)
    });
    }, []);
//This function adds a heart to a happy thought (if button is clicked)
    const onThoughtLiked = (id) => {
        const updatedThoughts = thoughts.map((thought) => {
          if (thought._id === id) {
            thought.hearts += 1
          }
          return thought
        })
        setThoughts(updatedThoughts)
      }
      //This shows the actual message from the fetch on line 11 and also shows when it was posted. The props on line 40-43 are passed to the Like button component.
    return (
    <div className='thoughts-card'>{thoughts.map(message => {
        return (
            <div className='message' 
              key={message._id}>
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
        )
        
        })}
    </div>
    )
    }