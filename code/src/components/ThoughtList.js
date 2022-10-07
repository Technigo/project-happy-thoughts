import React from 'react'
import { formatRelative } from 'date-fns';

const ThoughtList = ({thought, handleLikes}) => {

    return (
    <section className='thoughtlist-wrapper'>
         <form className='message-card' >
            <p className='messages' key={thought._id}>{thought.message}</p>
            
            <div className="likedate-wrapper">
                
                <div className="like">
                    <button 
                        className={thought.hearts > 0 ? 'button-heart clicked' : 'button-heart'}
                        onClick={() => handleLikes(thought._id)}>
                        <span role='img' aria-label='heart'>❤️</span>
                    </button>
                    <span className='like-counter'> x {thought.hearts}</span>
                </div>
                <p className="date"> {formatRelative(new Date(thought.createdAt), new Date())}</p>
            </div>
        </form>   
    </section>
    );
};

export default ThoughtList
