import React, { useEffect, useState } from 'react';

import moment from 'moment';
// import Submit from './Submit';
// import Increment from './Like';
import { UserThoughts } from './InputThoughts';
// import HandleLikes from './Like'

export const THOUGHTS_URL = "https://happy-thoughts-technigo.herokuapp.com/thoughts";

export const ListThoughts = () => {


  const [thoughts, setThoughts] = useState([]);
  const [message, setMessage] = useState('');

  // const [countLikes, setCountLikes] = useState(0);

  // const hanldeCountLikes = newLike => {
  //   setCountLikes(newLike);
  // }

  const handleMessageChange = newMessage => {
    setMessage(newMessage);
  }


  useEffect(() => {
    fetch(THOUGHTS_URL)
      .then((res) => {
        return res.json()
      })
      .then(data => {
        setThoughts(data);
      });
  }, []);


  return (
    <div className="thoughts-container">


      <UserThoughts
        message={message}
        setMessage={handleMessageChange}
      />

      <div>

      </div>

      {
        thoughts.map(thought => (
          <article className="thoughts-card">
            <p className="thought-info" key={thought.createdAt}>
              {thought.message}
              {thought._id}
              <span className="time-stamp">
                {moment(thought.createdAt).fromNow()}
              </span>
            </p>
          </article>
        ))
      }
    </div >
  )
};