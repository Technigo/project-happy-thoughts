import React from 'react';
import moment from 'moment';

import Button from 'components/Button/Button'

import './Thought.css';

const Thought = ({ message, hearts, createdAt }) => {
  return (
    <>
      <div className="card">
        <p className="card--message">{message}</p>
        <div className="card--footer">
          <Button isSubmit={false} />
          <p aria-label="Amount of likes" className="card--footer-text card--like-count">x {hearts}</p>
          <p className="card--footer-text card--post-time">{moment(createdAt).fromNow()}</p>
        </div>
      </div>
    </>
  );
};

export default Thought;
