import React from 'react';

const Tweet = ({ value }) => {
  return (
    <div className="tweet">
      <p className="value">value</p>{/* {inputValue} */}
      <div className="heart">hart counter</div> {/* Onclick */}
      <div className="time">time</div>
    </div>
  )
}

export default Tweet;