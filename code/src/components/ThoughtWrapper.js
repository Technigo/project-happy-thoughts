/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
/* eslint-disable no-undef */
/* eslint-disable jsx-quotes */
/* eslint-disable-next-line no-unused-vars */
import React, { useState, useEffect } from 'react';
import ThoughtsList from './ThoughtsList';

const ThoughtWrapper = () => {
  const [thoughts, setThoughts] = useState([])

  useEffect(() => {
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
      .then((data) => data.json())
      .then((transformedData) => setThoughts(transformedData))
  }, []);
  return (
    <ThoughtsList thoughts={thoughts} />
  );
};

export default ThoughtWrapper;
