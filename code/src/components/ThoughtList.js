/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import moment from 'moment';

const ThoughtList = ({ thoughtList, setThoughtList }) => {
  useEffect(() => {
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
      .then((data) => data.json())
      .then((transformedData) => setThoughtList(transformedData))
      .catch((error) => console.error(error))
      .finally(() => console.log('everything is fine'))
  }, [setThoughtList]);

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
        const updatedThoughts = thoughtList.map((item) => {
          // eslint-disable-next-line no-underscore-dangle
          if (item._id === data._id) {
            item.hearts += 1;
            return item;
          } else {
            return item;
          }
        });
        setThoughtList(updatedThoughts);
      });
  };
  return (
    <section className="thought-list">
      {thoughtList.map((singleTask) => {
        return (
          <div className="thought-list-box" key={singleTask._id}>
            <p className="thought-list-item">{singleTask.message}</p>
            <div className="likes-date-wrapper">
              <div className="likes-wrapper">
                <button type="button" className="heart" onClick={() => onLikesIncrease(singleTask._id)}><span>💗</span></button>
                <p className="likes-amount">x {singleTask.hearts}</p>
              </div>
              <p className="post-date">Posted: {moment(singleTask.createdAt).fromNow()}</p>
            </div>
          </div>
        )
      })}
    </section>
  )
}
export default ThoughtList