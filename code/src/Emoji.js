import React from 'react';

export const Emoji = props => {
   return (
   <span
    className='emoji'
    role='img'
    aria-label='like'
  >
    {props.symbol}
  </span>
   );
};