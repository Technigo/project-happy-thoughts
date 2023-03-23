import React from 'react';
import SingleThought from './SingleThought';

export const NewThought = ({ thoughtsList }) => {
  return thoughtsList.map((thought) => {
    // eslint-disable-next-line no-underscore-dangle
    return (<SingleThought key={thought._id} thought={thought} />)
  });
}

