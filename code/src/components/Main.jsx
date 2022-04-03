import React, { useState, useEffect } from 'react';
import Header from './Header';
import ThoughtList from './ThoughtList';


const HAPPY_THOUGHTS_URL = 'https://happy-thoughts-technigo.herokuapp.com/thoughts';
const Main = () => {
    const [thoughts, setThoughts] = useState([]);
    const [loading, setLoading] = useState(true)

    const fetchList = () => {
        setLoading(true)
        fetch(HAPPY_THOUGHTS_URL)
            .then((res) => res.json())
            .then((data) => setThoughts(data))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false))
    }
    const handleLikes = (thoughtId, event) => {
        event.preventDefault();
        const options = {
            method: 'POST'
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
    const handleFormSubmit = (newThought, event) => {
        event.preventDefault()
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: newThought
            })
        }
        fetch(HAPPY_THOUGHTS_URL, options)
            .then(res => res.json())
            .then(() => {
               fetchList();
            })
            .catch((error) => {
                console.error(error)
            })
    }
    useEffect(() => {
        fetchList();
    }, []);


    if (loading) {
        return <h1>Loading in progress...</h1>
    }
    return (
        <main>
              <h1>
                Spread the happiness, share your thoughts for today
            </h1>
            <Header handleFormSubmit={handleFormSubmit} />
            <ThoughtList thoughts={thoughts} handleLikes={handleLikes}></ThoughtList>

        </main>
    )
}
export default Main;



/* RÄTT SÄTT FÖR INLINE FUNCTION INSIDE EVENT HANDLER enl common pitfall 
<button
className="button"
onClick={event => onButtonClick(event)}
>
Click me!
</button>*/


