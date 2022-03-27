import React from 'react';
import { formatDistance } from 'date-fns';


const Thoughts = ({ loading, thoughts, onNewLikeSubmit }) => {

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
                    <section className='like-section'>
                    <button
                        className='like-btn'
                        onClick={() => onNewLikeSubmit(singleThought._id)}
                    >
                        <span role='img' aria-label='heart-emoji'>♥️</span>
                    </button>
                    <p>x {singleThought.hearts}</p>
                    </section>
                </article>
            ))}
        </section>
    )
};

export default Thoughts;
