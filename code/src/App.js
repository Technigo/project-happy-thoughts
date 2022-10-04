/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable spaced-comment */
/* eslint-disable jsx-quotes */
import React from 'react';
import ThoughtWrapper from 'components/ThoughtWrapper';
import NewThoughts from 'components/NewThoughts';
import Header from './components/Header';

export const App = () => {
  return (
    <div className='main'>
      <Header />
      <NewThoughts />
      <ThoughtWrapper />
    </div>
  );
};
