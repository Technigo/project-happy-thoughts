// import React, { useEffect } from 'react';
import React from 'react';
import { formatDistance, formatRelative } from 'date-fns';


const ThoughtsList = ({  thoughts, handleHeartCounter }) => {

  return (
    <section className="section-list">
      {thoughts.map((thought) => {
        return (
        <div className='thoughts-messages'
          key={thought._id}> 
          <p className="message-text"> {thought.message}</p>           
         
          <button 
            className='like-button' 
            type='button' aria-label="like-message"
            onClick={() => {handleHeartCounter(thought._id);
            }}>
            <span>
            ❤️ 
            </span>
              </button>
          <p className="likes-num">+{thought.hearts}</p>
          
     
        <i className="date-messages">
          {formatDistance(new Date(thought.createdAt), Date.now(), 
          {addSuffix: true,
          })}
        </i>
      </div>
         
        )
      })}
  </section>
  )
}
    export default ThoughtsList;

   