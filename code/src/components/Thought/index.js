import { Card } from 'components/Card';
import React, { useState } from 'react';
import moment from 'moment';
import styles from './Thought.module.css';
import { likeThought } from '../../lib/api';

const Thought = (props) => {
  console.log(props.thought);
  const [likes, setLikes] = useState(props.thought.hearts);

  const handleClick = () => {
    console.log(props, props.thought, props.thought._id);
    likeThought(props.thought._id);
    setLikes(likes + 1);
  };

  return (
    <Card type="card2">
      <div className="testlength">
        <h4>{props.thought.message}</h4>
        <div className={styles.likeAndDate}>
          <div className={styles.like}>
            <button
              className={likes === 0 ? styles.button : styles.clickedButton}
              type="button"
              onClick={handleClick}
            >
              <span className={styles.heart}>❤️ </span>
            </button>
            <p>x</p>
            {likes}
          </div>
          <p>{moment(props.thought.createdAt).fromNow()}</p>
        </div>
      </div>
    </Card>
  );
};

export default Thought;
