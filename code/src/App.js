import React from 'react';
import ThoughtWrapper from 'components/ThoughtWrapper';
import Header from './components/Header';

export const App = () => {
  return (
    <div className='main'>
      <Header />
      <ThoughtWrapper />
    </div>
  );
};
