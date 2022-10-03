/* eslint-disable linebreak-style */
/* eslint-disable jsx-quotes */
/* eslint-disable linebreak-style */
import React from 'react';
import Header from './components/Header';
import NewThought from './components/NewThought';
import ThoughtsList from './components/ThoughtsList';

export const App = () => {
  return (
    <div className='thoughts-wrapper'>
      <Header />
      <NewThought />
      <ThoughtsList />
    </div>
  );
};
