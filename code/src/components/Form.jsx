import React, { useState, useEffect } from 'react';
import Thought from './Thought';


const HAPPY_THOUGHTS_URL = 'https://happy-thoughts-technigo.herokuapp.com/thoughts';
//const LIKES_URL = 'https://happy-thoughts-technigo.herokuapp.com/thoughts';

const Form = () => {
    const [thoughts, setThoughts] = useState([]);
    const [newThought, setNewThought] = useState('')
    const [loading, setLoading] = useState(true)

    const fetchList = () => {
        setLoading(true)
        fetch(HAPPY_THOUGHTS_URL)
            .then((res) => res.json())
            .then((data) => setThoughts(data))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false))
    }
    useEffect(() => {
        fetchList();
    }, []);

    if (loading) {
        return <h1>Loading in progress...</h1>
    }
     const handleLikes = (thoughtId, event) =>{
         event.preventDefault();
         const options = {
             method:'POST'
         }
         const uri = `${HAPPY_THOUGHTS_URL}/${thoughtId}/like`;
         fetch(uri, options)
         .then(res => res.json())
         .then(() => {
             fetchList()
         })
         .catch((error) => {
             console.error(error)
         })
     }

  

    const handleFormSubmit = (event) => {
        event.preventDefault()
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: newThought
            }),

        }

        fetch(HAPPY_THOUGHTS_URL, options)
            .then(res => res.json())
    }
    return (
        <form>
            <div>
                {thoughts.map((thought) => (
                    <Thought key={thought._id} thought={thought} addLike={handleLikes}></Thought>
                )
                )};
            </div>
        </form>
    )
}
    export default Form;



/* RÄTT SÄTT FÖR INLINE FUNCTION INSIDE EVENT HANDLER enl common pitfall 
<button
className="button"
onClick={event => onButtonClick(event)}
>
Click me!
</button>*/


