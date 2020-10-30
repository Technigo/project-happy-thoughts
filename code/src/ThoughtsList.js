import React, { useEffect, useState } from 'react';
import moment from 'moment';

export const ThoughtsList = ( { thoughtsList, onLiked, hearts, _id } ) => {
 // const THOUGHTS_URL = 'https://happy-thoughts-technigo.herokuapp.com/thoughts';
 // const [thoughts, setThoughts] = useState([]);
  const [likes, setLikes] = useState(0);

  /*useEffect(() => {
    fetch(THOUGHTS_URL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);

        setThoughts(data);
        console.log(thoughts);
      });

  }, []); */

  const handleClick = () => {
    fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${_id}/like`, {
      method: 'POST',
      body:'',
      headers: { 'Content-Type': 'application/json' }
    }).then(() => onLiked(_id))
  }

return (
  <div>
    {thoughtsList.map((item) => {
      return (
        <section key={item._id} className="thought-card">
          <div className="top-of-card">
            <p className="thought-text">
              {item.message}
            </p>
          </div>
          <div className="bottom-of-card">
            <p className="like-text">
              <button className='liked-heartemoji'
                type='button'
                onClick={handleClick}
                style={{ background: hearts > 0 ? '#ffadad' : '#f3f1f1 '}}
                >
                <span role='img' aria-label='Heart'>{'❤️' }</span>
              </button>
              x {item.hearts}
            </p>
            <p className="time-text">
              {moment(item.createdAt).fromNow()}
            </p>
          </div>
       </section>
      )
    })}
  
  </div>
);
};
