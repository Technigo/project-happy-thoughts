import React from 'react';

import HeartIcon from '../../assets/heart-icon.png';

const InputInfo = ({ newThought }) => {
  return (
    <div className="input-info">
      <button
        className="send-button"
        disabled={newThought.length < 6 || newThought.length > 140 ? true : false}
      >
        <img className="heart left" src={HeartIcon} alt="Pink heart"></img>
      Send Happy Thought
      <img className="heart right" src={HeartIcon} alt="Pink heart"></img>
      </button>
      <p className="length">{newThought.length}/140</p>
    </div>
  )
}

export default InputInfo;