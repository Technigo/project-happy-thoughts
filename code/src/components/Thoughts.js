import React, { useEffect, useState } from 'react';
import { formatDistance } from 'date-fns';

const API_RECENT_URL='https://happy-thoughts-technigo.herokuapp.com/thoughts'

const Thoughts = () => {
    const [thoughts, setThoughts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchThoughts()
    }, []);

    const fetchThoughts = () => {
        setLoading(true);
        fetch(API_RECENT_URL)
        .then(res => res.json())
        .then(data => setThoughts(data))
        .catch(error => console.error(error))
        .finally(() => setLoading(false));
    }

    if (loading) {
        return <h1>Loading in progress...</h1>
    }

    return (
        <section>
            {thoughts.map(singleThought => (
                <article key={singleThought._id}>
                    <h4>{singleThought.message}</h4>
                    <p>
                        {formatDistance(new Date(singleThought.createdAt), Date.now(),{
                            addSuffix: true
                        })}
                    </p>
                    <p>{singleThought.hearts}</p>
                </article>
            ))}
        </section>
    )
};

export default Thoughts;
