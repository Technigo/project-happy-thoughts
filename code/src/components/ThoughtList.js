/* eslint-disable no-underscore-dangle */
import React from 'react';
import moment from 'moment';

const ThoughtList = ({ thoughtList, onLikesIncrease }) => {
  return (
    <section className="thought-list">
      {thoughtList.map((thoughtMessage) => {
        return (
          <div className="thought-list-box" key={thoughtMessage._id}>
            <p className="thought-list-item">{thoughtMessage.message}</p>
            <div className="likes-date-wrapper">
              <div className="likes-wrapper">
                <button
                  type="button"
                  className="heart"
                  onClick={() => onLikesIncrease(thoughtMessage._id)}
                  style={{ background: thoughtMessage.hearts >= 1 ? '#f9d4d4' : '#e9e7e7' }}>
                  <span>
                    ❤️️
                  </span>
                </button>
                <p className="likes-amount">x {thoughtMessage.hearts}</p>
              </div>
              <p className="post-date">Posted: {moment(thoughtMessage.createdAt).fromNow()}</p>
            </div>
          </div>
        )
      })}
    </section>
  );
}

export default ThoughtList