import React, { useState, useEffect } from 'react';

import Header from 'Components/Header';
/* import { NewThought } from 'Components/NewThought'
import { ThoughtList } from 'Components/ThoughtList' */

/* Mothership Component */
export const App = () => {
  const onSubmit = (event) => {
    event.preventDefault()
  }
  return (
    <>
      <Header />
      <form onSubmit={console.log('hej')}>
        <input type="text" />
        <button type="submit">click me!</button>
      </form>
    </>
  );
};