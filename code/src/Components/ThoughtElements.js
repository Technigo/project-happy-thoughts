import React from 'react'
import Moment from 'moment';



const ThoughtElement = ({ thought, handleLike }) => {
  console.log(thought)


  return (
    <section className='thought-container grow shadow-20'>
      <div className='thought-content'>
        <p key={thought._id}>{thought.message}</p>
          <div className='info-group' >
            <div className='thoughttext-container'>
              <div className='like-wrapper'>
                <button 
                onClick={() => handleLike(thought._id)}>
                  <span role='img' aria-label='heart'>❤️</span>
                </button>
                <span className='likes-count'>x {thought.hearts}</span>
              </div>
              <p className='date'>{Moment(thought.createdAt).fromNow()}</p>
            </div>
          </div>
      </div>
    </section>
  );
};

export default ThoughtElement;