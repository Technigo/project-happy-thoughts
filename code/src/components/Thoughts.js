import React, { useState, useEffect, useCallback } from 'react'

import AddThought from './AddThought'
import ThoughtsList from './ThoughtsList'

// const thoughtsAPI = 'https://happy-thoughts-technigo.herokuapp.com/thoughts'
const thoughtsAPI = 'https://project-happythoughts-api.herokuapp.com/thoughts'
const heartIcon = <img alt='heart-icon' src={'assets/heart.png'} className='heart-icon'/>
const emotions = [
    'happy',
    'sad',
    'frustrated',
    'angry',
    'inspired',
    'amused',
    'confident',
    'grateful',
    'irritated',
    'stressed'
]

const Thoughts = () => {
	const [thoughts, setThoughts] = useState([])
    const [newThought, setNewThought] = useState('')
    const [newThoughtLength, setNewThoughtLength] = useState('')
    const [currentEmotion, setCurrentEmotion] = useState('happy')

    const handleNewThoughtSubmit = (event) => {
        setNewThought(event.target.value);
        setNewThoughtLength(event.target.value.length);
    }

    const changeCurrentEmotion = () => {
        setCurrentEmotion(emotions[Math.floor(Math.random() * emotions.length)-1])
    }

    const handleSubmitting = (event) => {
        event.preventDefault();
        fetch(thoughtsAPI, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify({ message: newThought }),
        }).then((results) => {
            if (!results.ok) {
                console.log("no success"); 
            } else {
                fetchThoughts();
                setNewThought('');
                setNewThoughtLength('')
                changeCurrentEmotion();
            }
        });
    };

    const handleLikes = (id) => {
        fetch(`${thoughtsAPI}/${id}/like`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        })
        .then((results) => {
            if (!results.ok) {
                console.log("no success", results); 
            } else {
                fetchThoughts()
            }
        });
    }

    const fetchThoughts = useCallback(() => {
        fetch(thoughtsAPI)
			.then(res => res.json())
			.then(json => setThoughts(json.response))
    }, [])

    useEffect(() => {
        fetchThoughts();
    }, [])
    
    setInterval(fetchThoughts, 5000);

    return (
        <div>
            <div>
                <AddThought 
                    heartIcon={heartIcon}
                    newThought={newThought}
                    newThoughtLength={newThoughtLength}
                    handleNewThoughtSubmit={handleNewThoughtSubmit}
                    currentEmotion={currentEmotion}
                    onSubmitting={handleSubmitting}
                />
            </div>
            <div>
                <ThoughtsList 
                    thoughts={thoughts}
                    heartIcon={heartIcon}
                    handleLikes={handleLikes}
                />
            </div>
        </div>
    )
}

export default Thoughts;
