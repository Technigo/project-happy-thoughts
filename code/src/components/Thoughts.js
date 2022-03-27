import React from 'react';
import { formatDistance } from 'date-fns';


const Thoughts = ({ loading, thoughts }) => {

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
