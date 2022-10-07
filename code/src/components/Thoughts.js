/* eslint-disable */
import React, { useEffect } from 'react';
import moment from 'moment';

const Thoughts = ({ thoughts, setThoughts }) => {
  useEffect(() => {
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
      .then((res) => res.json())
      .then((data) => setThoughts(data))
      .catch((error) => console.error(error))
      .finally(() => console.log('list of thoughts'))
  }, []);

  const onLikesIncrease = (thoughtId) => {
    const options = {
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    };
    fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${thoughtId}/like`, options)
      .then((res) => res.json())
      .then((data) => {
        const updatedThoughts = thoughts.map((thought) => {
          if (thought._id === data._id) {
            thought.hearts += 1;
          }

          return thought;
        });
        setThoughts(updatedThoughts);
      });
  }

  return (
    <section className="thoughts-feed">
      {thoughts.map((thought) => {
        return (
          <div className="thought-container" key={thought._id}>
            <p className="thought-message">{thought.message}</p>
            <div className="non-statics-box">
              <div className="likes">
                <button type="button" className="like" onClick={() => onLikesIncrease(thought._id)} ><span> ❤️ </span></button>
                <p className="likes-amount">x {thought.hearts}</p>
              </div>
              <p className="thought-posted">{moment(thought.createdAt).fromNow()}</p>
            </div>
          </div>
        )
      })}
    </section>
  )
}
export default Thoughts;