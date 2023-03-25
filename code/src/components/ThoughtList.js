/* eslint-disable */
import React from 'react';
import { formatDistanceToNow } from 'date-fns';


export const ThoughtList = ({ loading, thoughtList, handleLike }) => {
    if (loading) {
        return <h1>Loading Happy Thoughts 💗</h1>
    }
  
    return (
        <section className="thought-section">
            {thoughtList.map((thought) => {
                return (
                <div key={thought._id} className="single-thought">
                    <h4>{thought.message}</h4>
                <div className="thought-details"> 
                    <div className="likes-wrapper">
                        <button>
                            className={thought.hearts === 0 ? 'heart-button-nolikes' : 'heart-button'}
                            type="button"
                            onClick={() => handleLike(thought._id)}
                        </button>
                        <span>x {thought.hearts}</span>
                </div>
                <div className="time-wrapper">
                    <span className="time">{formatDistanceToNow(
                        new Date (thought.createdAt),
                        Date.now(),
                        { addSuffix: true }
                    )}
                    </span>
                </div>
                </div>
                </div>
            )})}
        </section>
    );
}