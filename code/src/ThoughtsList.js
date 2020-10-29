import React, { useState } from 'react';
import moment from 'moment';

export const ThoughtsList = ( { thoughtsList } ) => {
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
              <span className='liked-heartemoji' role='img' aria-label='Heart'>
						    {'❤️' }
					    </span>
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
