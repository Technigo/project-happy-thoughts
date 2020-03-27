import React, { useState, useEffect } from 'react'
import './MessageListStyle.css'
import moment from 'moment'
import { HeartButton } from 'HeartButton'


export const MessageList = () => {

    const MESSAGES_URL = "https://technigo-thoughts.herokuapp.com/"
    const [happyThougths, setHappyThougths] = useState([]);

    useEffect(() => {

        fetch(MESSAGES_URL)
        .then((res) => {
          return res.json()
        })
        .then(data => {
            setHappyThougths(data)
        })
      }, [])

    return (

        <div>
            {
            happyThougths.map(thought => (
                <p key={thought._id}  className= 'happy-thought-box'>
                    {thought.message}
                    <section className="heart-and-time-container">
                    <section className='heart-container'>
                            <HeartButton />
                            <span>
                                x {thought.hearts}
                            </span>
                        </section>
                        <section className="time-container">
                            <span>
                                {moment(thought.createdAt).fromNow()}
                            </span>
                        </section> 
                    </section>
                </p> 
        
            ))
            }
        </div>
    )
}
 