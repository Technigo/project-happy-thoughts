/* eslint-disable linebreak-style */
import React from 'react';
import Header from './components/Header'
import ThoughtForm from './components/ThoughtForm'
import ThoughtList from './components/ThoughtList'

export const App = () => {
  return (
    <div>
      <Header />
      <ThoughtForm />
      <ThoughtList />
    </div>
  );
}
