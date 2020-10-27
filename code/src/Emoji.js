import React from 'react';

export const Emoji = props => {
   return (
   <span
    className='emoji'
    role='img'
  >
    {props.symbol}
  </span>
   );
};