import React from 'react';

import Heart from '../../assets/heart.svg';

const NewThought = () => {
  return (
    <article className="new-thought">
      <p className="new-message">What's making you happy right now?</p>
      <input className="input"></input>
      <button className="send-button">
        <img className="heart" src={Heart} alt="Pink heart"></img>
        Send Happy Thought
        <img className="heart" src={Heart} alt="Pink heart"></img>
      </button>
    </article>
  )
}

export default NewThought;