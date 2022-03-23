import React, { useState, useEffect, useCallback } from 'react'



import AddThought from './AddThought'
import ThoughtsList from './ThoughtsList'



const thoughtsAPI = 'https://happy-thoughts-technigo.herokuapp.com/thoughts'
const heartIcon = <img alt='heart-button' src={'assets/heart.png'} className='heart-icon'/>
const emotions = [
    'happy',
    'sad',
    'frustrated',
    'angry',
    'inspired',
    'amused',
    'confident',
    'grateful',
    'irritated'
]

const Thoughts = () => {
	const [thoughts, setThoughts] = useState([])
    const [newThought, setNewThought] = useState('')
    const [newThoughtLength, setNewThoughtLength] = useState('')
    const [currentEmotion, setCurrentEmotion] = useState('happy')
    // const [likes, setlikes] = useState(0)



    const handleNewThoughtSubmit = (event) => {
        setNewThought(event.target.value);
        setNewThoughtLength(event.target.value.length);
        // console.log(newThought, newThoughtLength)
    }

    const handleNewThought = (msg) => {
        setNewThought(msg)
    }

    const handleNewThoughtLength = (msg) => {
        setNewThoughtLength(msg)
    }

    const fetchThoughts = useCallback(() => {
        fetch(thoughtsAPI)
			.then(res => res.json())
			.then(json => setThoughts(json))
    }, [])

    const handleLikes = (id) => {
        fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${id}/like`, {
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

    const handleCurrentEmotion = () => {
        setCurrentEmotion(emotions[Math.floor(Math.random() * emotions.length)])
    }
        

    useEffect(() => {
        fetchThoughts();
        setInterval(fetchThoughts, 5000);
    }, [fetchThoughts]);

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
                    handleNewThoughtLength={handleNewThoughtLength}
                    currentEmotion={currentEmotion}
                    setCurrentEmotion={handleCurrentEmotion}
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
