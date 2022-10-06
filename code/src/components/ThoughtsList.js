import React from 'react';
import { formatDistance } from 'date-fns';
import { DotSpinner } from '@uiball/loaders';

const ThoughtsList = ({ loading, thoughts, handleLikeCounter }) => {
  if (loading) {
    return (
      <>
        <h2>Loading..</h2>
        <DotSpinner size={40} speed={0.9} color='black' />
      </>
    );
  }

  return (
    <section className='thought-list'>
      {thoughts.map((thought) => {
        return (
          <div className='thought-container' key={thought._id}>
            <h2 className='all-thoughts'>{thought.message}</h2>
            <div className='like-and-time'>
              <div className='like-container'>
                <button
                  type='button'
                  className='like-btn'
                  onClick={() => {
                    handleLikeCounter(thought._id);
                  }}
                  style={{
                    background: thought.hearts >= 1 ? '#e79898bd' : '#f2f2f2',
                  }}
                >
                  ❤️
                </button>
                <p className='likes'>x {thought.hearts}</p>
              </div>
              <div className='timestamp'>
                <p className='created'>
                  {formatDistance(new Date(thought.createdAt), Date.now(), {
                    addSuffix: true,
                  })}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default ThoughtsList;
