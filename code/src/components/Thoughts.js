import React, { useState, useEffect } from 'react'
import { /*formatRelative,*/ formatDistance } from 'date-fns';
import parseISO from 'date-fns/parseISO';

import AddThought from './AddThought'
import Button from './Button'


// const [messageSent, setMessageSent] = useState(false)
// const [messageLiked, setMessageLiked] = useState(false)

// const interval=setInterval(()=>{
//     getThoughts()
//    },10000)
//    return()=>clearInterval(interval)

// pass them through to your components
// and then switch them

// and then use them as dependencies both in your if statement and at the end of your [] in your useEffect
// and set an interval inside your useEffect to update every x amount of time



const Thoughts = ({heartIcon, thoughtsAPI}) => {
	const [thoughts, setThoughts] = useState([])
    const [newThought, setNewThought] = useState('')
    const [newThoughtLength, setNewThoughtLength] = useState('')

    const handleNewThoughtSubmit = (event) => {
        setNewThought(event.target.value);
        setNewThoughtLength(event.target.value.length);
        console.log(newThought, newThoughtLength)
    }

    const handleNewThought = (msg) => {
        setNewThought(msg)
    }

    const fetchThoughts = () => {
        fetch(thoughtsAPI)
			.then(res => res.json())
			.then(json => setThoughts(json))
    }

    useEffect(() => {
        fetchThoughts();
        setInterval(fetchThoughts, 5000);
    }, [])
    

    return (
        <div>
            <div>
                <AddThought 
                    heartIcon={heartIcon}
					thoughtsAPI={thoughtsAPI}
                    fetchThoughts={fetchThoughts}
                    newThought={newThought}
                    handleNewThought={handleNewThought}
                    newThoughtLength={newThoughtLength}
                    handleNewThoughtSubmit={handleNewThoughtSubmit}
                />
            </div>
            <div>
                {thoughts.map((thought) => (
                    <div key={thought._id} className='thought card'>
                        <h2 className='thought-header'>{thought.message}</h2>
                        <div className='likes-container'>
                            <Button 
                                message={heartIcon}
                                className={'like-button'}
                                // imgSrc={'assets/heart.png'}
                            />
                            <p className='number-of-likes'> x {thought.hearts}</p>
                        </div>
                        {/* <p>Posted: {formatRelative(subDays(new Date(thought.createdAt), 3), new Date())}</p> */}
                        <p className='posted-date'>{formatDistance(parseISO(thought.createdAt), new Date(), { addSuffix: true })}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Thoughts;
