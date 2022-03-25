import React, { useState, useEffect } from 'react'

import { formatDistance } from "date-fns";


const DisplayThoughts = ({ newThought }) => {
    const [thoughts, setThoughts] = useState([]);

    useEffect(() => {
        fetchAllThoughts()
    }, []);


    const fetchAllThoughts = () => {
        fetch("https://happy-thoughts-technigo.herokuapp.com/thoughts")
            .then((res) => res.json())
            .then((data) => setThoughts(data))
    }

    const allThoughts = thoughts.map((thought) => {

        const onLikeClickValueChange = () => {
            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    message: newThought
                })
            };

            fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${thought._id}/like`, options)
                .then((res) => res.json())
                .then(() => {
                    fetchAllThoughts()
                });
        }
          {
            return <div className="thought" key={thought._id}>
            <p className="messages">{thought.message}</p>
            <div className="likes-wrapper">
                <div className="heart-icon-radius">
                    <img onClick={onLikeClickValueChange} className="heart-icon" src="./heart-icon.png" alt="heart" />
                </div>
                <p className='heart-count'>x {thought.hearts}</p>
                <p className="date">
                    {formatDistance(new Date(thought.createdAt), Date.now(), {
                        addSuffix: true,
                    })}
                </p>
                </div>
        </div>;
        }
    });
    return (
        <section className="all-thoughts">
            <div className="thought-wrapper">{allThoughts}</div>
        </section>
    );
};

export default DisplayThoughts;