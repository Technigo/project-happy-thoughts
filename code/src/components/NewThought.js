/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
/* eslint-disable no-undef */
/* eslint-disable jsx-quotes */
/* eslint-disable-next-line no-unused-vars */
import React from 'react';
// import ApiUrl from './ApiURL';

const NewThought = () => {
  return (
    <div className='new-thought'>
      <h1>What`s making you happy right now?</h1>
      <form>
        <input type='text' className='thought-input' />
        <button type='button' className='submit-thought' onSubmit=''>
          ❤️ Send happy thought ❤️
        </button>
      </form>
    </div>
  );
};

export default NewThought;
