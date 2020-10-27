import React, { useEffect, useState } from 'react';
import moment from 'moment'

export const ThoughtList = () => {
    const THOUGHTS_URL = 'https://happy-thoughts-technigo.herokuapp.com/thoughts'
    /* create state for messages */
    const [thoughts, setThoughts] = useState([])

    useEffect(() => {
        /* use useeffects to fetch messages from backend */
        fetch(THOUGHTS_URL)
        .then((res)=>{
            return res.json()
        })
        .then(data => {
          
            const filteredData = data.filter(thought => {
               return thought.message !== ""
            })

            setThoughts(filteredData) /* data is an array of messages */
        })
    }, [])

    return (
        <div>
            {thoughts.map(thought=> 
              <p className='thought' key={thought._id}>
                  {thought.message}
                  <span className='thought-time'>
                      {moment(thought.createdAt).fromNow()}
                  </span>
              </p>  
            )}
            
        </div>
    )
}