import { Card } from 'components/Card';
import React, { useState } from 'react';
import moment from 'moment';
import styles from './Thought.module.css';

const Thought = (props) => {
  console.log(props.thought);
  const [likes, setLikes] = useState(props.thought.hearts);

  const handleClick = () => {
    fetch(
      `https://happy-thoughts-technigo.herokuapp.com/thoughts/${props.thought._id}/like`,
      {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    setLikes(likes + 1);
  };

  return (
    <Card type="card2">
      <div className="testlength">
        <h4>{props.thought.message}</h4>
        <div className={styles.likeAndDate}>
          <button type="button" onClick={handleClick}>
            {likes}
          </button>
          <p>{moment(props.thought.createdAt).fromNow()}</p>
        </div>
      </div>
    </Card>
  );
};

export default Thought;
