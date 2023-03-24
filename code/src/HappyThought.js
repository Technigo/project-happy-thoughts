/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import moment from 'moment';

const HappyThought = (props) => {
  const [hearts, setHearts] = useState(props.hearts); // initialize state with the number of likes

  const handleLike = () => {
    fetch(`https://<API_URL>/thoughts/${props.id}/like`, { // send a POST request to your API endpoint to increase the number of likes for this thought
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ increment: 1 })
    })
      .then((response) => response.json())
      .then((data) => setHearts(data.hearts)); // update the state with the new number of likes
  };

  return (
    <div className="happy-thought-wrapper">
      <p>{props.text}</p>
      <div className="data-wrapper">
        <div className="likes">
          <button type="submit" onClick={handleLike}>❤️</button>x{hearts}
          {/* update the number of likes with the state value */}
        </div>
        <div className="timestamp">
          <p>{moment(props.timestamp).startOf('hour').fromNow()}</p>
        </div>
      </div>
    </div>
  );
};

export default HappyThought;
