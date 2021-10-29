import React from 'react';

const CharCount = ({ messageLength }) => {
  return (
    <>
      <p className='char-text'>
        <span className={messageLength > 140 ? 'char-text-red' : 'char-text'}>
          {140 - messageLength}{' '}
        </span>
        / 140
      </p>
    </>
  );
};

export default CharCount;
