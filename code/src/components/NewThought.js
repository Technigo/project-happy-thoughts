import React, { useState } from 'react';
import './newthought.css'

const NewThought = ({ onFormSubmit, newThought, onInputChange }) => {

  const[count, setCount]= useState(0)
  return (
    <form className="new-thought" onSubmit={onFormSubmit}>
      {' '}
      <p> What's making you happy right now?</p>
      
      <input
        className="new-message"
        type="textarea"
        value={newThought}
        onChange={onInputChange}
        onKeyUp={()=>setCount(count +1)}
        ></input>
       
        <p>{count}</p>
        
      
      <button className="submit-button" type="submit">
        &hearts; Send Happy Thought! &hearts;
      </button>
    </form>
  );
};

export default NewThought;
