import React, { useState } from 'react'
import moment from 'moment';

import { LikesContainer } from 'LikesContainer';

export const ThoughtContainer = ( {key, message, created, hearts, id, fetchThought} ) => {

    const postALike = id => {
        console.log(id.target.id)
        /*
        fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${id}/like`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: ''
        }).then(() => {
            // fetchThought();
            console.log('liked') 
          }).catch(error => console.error(error));
          */
      }

    return (
        <div className="thought-container">
            <p className="thought" key={key}>
            {message}
            </p>
            <div className="like-container">
                <span>
                    <button 
                        className="like-button" 
                        id={id}
                        onClick={postALike}
                    >
                        {'❤️'}
                    </button> x {hearts}
                </span>
                <p className="created">{moment(created).fromNow()}</p>
            </div>
            
        </div>
        
    )
}