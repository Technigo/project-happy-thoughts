/* eslint-disable */
import React, { useEffect, useState } from 'react';

import Thoughts from 'components/Thoughts';
import NewThought from 'components/NewThought';
import Header from 'components/Header';

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newThought, setNewThought] = useState('');
  const onFormSubmit = (event) => {
    event.preventDefault();

}
  return (
    <section className="main-feed">
      <Header />
      <NewThought newThought={newThought} setNewThought={setNewThought} />
      <Thoughts thoughts={thoughts} setThoughts={setThoughts} />
    </section>
  );
}