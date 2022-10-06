/* eslint-disable */
import React, { useEffect, useState } from 'react';

import Thoughts from 'components/Thoughts';
// import NewThought from 'components/NewThought';

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [newThought, setNewThought] = useState('');

  // useEffect(() => {
  //   Thoughts();
  // }, [setThoughts]);

  console.log(thoughts)
  return (
    <div>
      <Thoughts thoughts={thoughts} setThoughts={setThoughts} />
    </div>
  );
}