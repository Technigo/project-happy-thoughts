import React, { useState, useEffect } from 'react'
import './MessageListStyle.css'
import moment from 'moment'



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
                    <button className="heart-button">
                        <span> 💗</span>
                    </button> 
                    <span className="small-gray-text">
                        x {thought.hearts}
                    </span>
                    <span className="small-gray-text">
                        {moment(thought.createdAt).fromNow()}
                    </span>



                </p> 
        
            ))
            }
        </div>
    )
}
 