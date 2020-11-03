import React from 'react';

const Message = ({ message }) => {
  return (
    <p tabIndex='0' className='message'>
      {message}
    </p>
  );
};

export default Message;