import React, { useState, useEffect } from 'react';

export const Heart = (props) => {

  return (
    <li><button><span role="img" aria-label="heart">❤️ </span></button>x{props.hearts}</li>
  )
}