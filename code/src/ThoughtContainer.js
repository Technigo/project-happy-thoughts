import React from 'react'
import moment from 'moment';


export const ThoughtContainer = ( {message, created, hearts, id, onThoughtLiked} ) => {

    const postALike = () => {
        fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${id}/like`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: ''
        }).then(() => {
            onThoughtLiked(id);
          }).catch(error => console.error(error));
      }

    return (
        <div className="thought-container">
            <p className="thought">
                {message}
            </p>
            <div className="like-container">
                <span>
                    <button 
                        className="like-button" 
                        id={id}
                        onClick={postALike}
                    >
                        <span 
                            role='img' 
                            aria-label='Heart'>
                            ❤️
                        </span>
                    </button> x {hearts}
                </span>
                <p className="created">{moment(created).fromNow()}</p>
            </div>
        </div> 
    )
}