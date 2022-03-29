import React from 'react';
import { formatDistance } from 'date-fns';


const Thoughts = ({ loading, thoughts, onNewLikeSubmit }) => {

    if (loading) {
        return <h4 className="loading-text">Happy tweets incoming in 3.. 2.. 1..</h4>
    }

    return (
        <section className='thoughts-container'>
            {thoughts.map((thought) => ( 
                <article className='thoughts-cards' key={thought._id}>
                    <h4 className='thoughts-message'>{thought.message}</h4>
                    <div className='time-and-like-container'>
                        <section className='like-container'>
                            <button
                                className={thought.hearts === 0 ? 'no-like-btn' : 'like-btn'}
                                onClick={() => onNewLikeSubmit(thought._id)}
                                >
                                <span className= 'emoji' role='img' aria-label='heart-emoji'>💛</span>
                            </button>
                            <p className='like-counter'>x {thought.hearts}</p>
                        </section>
                        <p className='timestamp'>
                            {formatDistance(new Date(thought.createdAt), Date.now(),{
                             addSuffix: true
                        })}
                        </p>
                    </div>
                </article>
            ))}
        </section>
    );
};

export default Thoughts;
