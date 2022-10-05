import React, { useState } from 'react';
// import { formatRelative } from 'date-fns';


const ThoughtsList = ({ loading, thoughts, handleLikeCounter, colorBtn }) => {

  if (loading) {
    return <h1>Loading in progress...</h1>
  }

  return (
    <section className='thought-list'>
      {thoughts.map((thought) => {
        return (
          <div className='thought-container' key={thought._id}>
            <p className='all-thoughts'>{thought.message}</p>
            <div className='like-container'>
            <button 
            type='button' 
            className='like-btn' 
            onClick={() => {
              handleLikeCounter(thought._id);
            }}
            style={ {background : colorBtn } }>
             ❤️ 
            </button>
            <p className='likes'>x {thought.hearts}</p>
            <p className='created'>{thought.createdAt}</p>
            </div>
          </div>
        )
      })}
    </section>
  )
};

export default ThoughtsList;
