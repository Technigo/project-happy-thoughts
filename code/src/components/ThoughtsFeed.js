import React from 'react';
import moment from 'moment';


export const ThoughtsFeed = ({ thoughtsFeed, hearts, onLiked, _id }) => {

  const handleClick = () => {
    fetch (`https://happy-thoughts-technigo.herokuapp.com/thoughts/${_id}/like`, {
      method: 'POST',
      body: '',
      headers: { 'Content-Type': 'application/json'}
    }).then(() => onLiked(_id))
  }

  return (
    <section>
    <div>
      {
        thoughtsFeed.map(thoughts => (
          <p className="thoughts" key={thoughts.createdAt}>
            {thoughts.message}
          <p>
          <button
            onClick={handleClick}
          >
          <span className="heart" role="img" aria-label="heart">
            {"❤️ "}
          </span>
          </button>
          x {hearts}
          </p>
          <span className="message-time">
          {moment(thoughts.createdAt).fromNow()}
          </span>
          </p>
          ))
      }
    </div>
    </section>
    );
}

