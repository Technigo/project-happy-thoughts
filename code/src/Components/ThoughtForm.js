<<<<<<< HEAD
import React from 'react';
import CharCount from './CharCount';
=======
import React from "react";
import CharCount from "./CharCount";
>>>>>>> b26ebeb9849581edd0bfb79510a39c73be4693c2

const ThoughtForm = ({
  onFormSubmitt,
  newThought,
  setNewThought,
  handleIncrement,
  count,
  thought,
}) => {
  return (
<<<<<<< HEAD
    <div className='thought-wrapper'>
      <form className='form' onSubmit={onFormSubmitt}>
        <p className='form-title'>What is making you happy right now?</p>
        <label
          htmlFor='label-title'
          disabled={newThought.length < 5 || newThought.length > 140}
        ></label>
        <textarea
          placeholder='React is making me happy!'
          className='textarea'
          id='newThought'
          type='text'
          value={newThought}
          onChange={(e) => setNewThought(e.target.value)}
        />
        <div className='counter-btn'>
          <button
            onClick={handleIncrement}
            type='submit'
            id='myInput'
            className='send-btn'
          >
            <span className='send-heart'>❤</span>
            Send happy thought
            <span className='send-heart'>❤</span>
            {count}times
          </button>
          <CharCount charCount={newThought.length} />
        </div>
      </form>
    </div>
=======
    <form className="form" onSubmit={onFormSubmitt}>
      <p className="form-title">What is making you happy right now?</p>
      <label
        htmlFor="label-title"
        disabled={newThought.length < 5 || newThought.length > 140}
      ></label>
      <textarea
        placeholder="React is making me happy!"
        className="textarea"
        id="newThought"
        type="text"
        value={newThought}
        onChange={(e) => setNewThought(e.target.value)}
      />
      <div className="counter-btn">
        <button
          onClick={handleIncrement}
          type="submit"
          id="myInput"
          className="send-btn"
        >
          <span className="send-heart">❤</span>
          Send happy thought
          <span className="send-heart">❤</span>
          {count}times
        </button>
        <CharCount charCount={newThought.length} />
      </div>
    </form>
>>>>>>> b26ebeb9849581edd0bfb79510a39c73be4693c2
  );
};

export default ThoughtForm;
