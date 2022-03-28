import React from 'react';
import { formatDistance } from 'date-fns';


const Thoughts = ({ loading, thoughts, onNewLikeSubmit }) => {

    if (loading) {
        return <h1>Loading in progress...</h1>
    }

    return (
        <section>
            {thoughts.map((thought) => ( 
                <article key={thought._id}>
                    <h4>{thought.message}</h4>
                    <p>
                        {formatDistance(new Date(thought.createdAt), Date.now(),{
                            addSuffix: true
                        })}
                    </p>
                    <section className='like-section'>
                    <button
                        className='like-btn'
                        onClick={() => onNewLikeSubmit(thought._id)}
                    >
                        <span role='img' aria-label='heart-emoji'>♥️</span>
                    </button>
                    <p>x {thought.hearts}</p>
                    </section>
                </article>
            ))}
        </section>
    )
};

export default Thoughts;
