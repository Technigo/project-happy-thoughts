/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import moment from 'moment';

const Thoughts = ({ thoughts, setThoughts }) => {
  // get list of thoughts but only once
  useEffect(() => {
    fetch('https://project-happy-thoughts-api-o4o7j2ybmq-lz.a.run.app/thoughts')
      .then((res) => res.json())
      .then((data) => setThoughts(data))
      .catch((error) => console.error(error))
      .finally(() => console.log('list of thoughts'))
  }, [setThoughts]);

  // add likes to server and GUI when clicking the heart
  const onLikesIncrease = (thoughtId) => {
    const options = {
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    };
    // increases likes count on server for specific thought id
    fetch(`https://project-happy-thoughts-api-o4o7j2ybmq-lz.a.run.app/thoughts/${thoughtId}/like`, options)
    // updates the list with new likes count
      .then((res) => res.json())
      .then((data) => {
        // create new list of thoughts with new likes count
        const updatedThoughts = thoughts.map((thought) => {
          // updates like count for the thought that was liked
          if (thought._id === data._id) {
            thought.hearts += 1;
          }

          return thought;
        });
        // updates thought with new likes count
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
                <button type="button" className={thought.hearts === 0 ? 'notLiked' : 'liked'} onClick={() => onLikesIncrease(thought._id)}><span> ❤️ </span></button>
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