import React from 'react'


const ThoughtList = ({thought, handleLikes}) => {

    
    return (
    <section className='post-container'>
         
            
            <p key={thought._id}>{thought.message}</p>
            
            <div className='info-group' >
            
            <div>

             <button 
            className={thought.hearts > 0 ? 'button-heart clicked' : 'button-heart'}
            onClick={() => handleLikes(thought._id)}>
             <span role='img' aria-label='heart'>❤️
             </span>
            </button>
            

            <span className='like-counter'>x {thought.hearts}</span>
            <div className='date'> {thought.createdAt}</div>

            </div>
            </div>
            
        </section>
    )
}

export default ThoughtList
