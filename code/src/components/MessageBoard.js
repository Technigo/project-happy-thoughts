import React, { useEffect, useState } from 'react'

import HappyThought from './HappyThought'

import { API_URL, API_LIKES} from '../reusable/urls'


const MessageBoard = () => { 

    // Declaring useStates:
    const [happyThoughtsList, setHappyThoughtsList] = useState([])
    
    // useEffect to control when we fetch from API:
    useEffect (() => {
        fetchHappyThoughts()
    }, [])

    // Function to fetch all the thoughts with API:
    
    const fetchHappyThoughts = () => {
        fetch(API_URL)
        .then(response => response.json())
        .then(data => setHappyThoughtsList(data))
        .catch(err => console.error(err));
    }

    console.log(happyThoughtsList)

    return (
        <div className="happy-thought-container">
            {happyThoughtsList.reverse().map(thought => (
                < HappyThought 
                    key={thought._id}
                    thought={thought}
                />
            ))}
        </div>
    )
}

export default MessageBoard;