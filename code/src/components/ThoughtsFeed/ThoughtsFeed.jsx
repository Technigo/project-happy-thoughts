/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';

import ThoughtForm from 'components/ThoughtForm/ThoughtForm';
import ThoughtCard from 'components/ThoughtCard/ThoughtCard';
import styles from './ThoughtsFeed.module.css';

const ThoughtsFeed = () => {
  const [thoughtsFeed, setThoughtsFeed] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchThoughts = () => {
    setLoading(true);
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
      .then((res) => res.json())
      .then((data) => setThoughtsFeed(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchThoughts();
  }, []);

  if (loading) {
    return <h2 className={styles.loadingMessage}>Loading...</h2>
  }

  return (
    <section className={styles.feedGrid}>
      <ThoughtForm setThoughtsFeed={setThoughtsFeed} />
      <ThoughtCard thoughtsFeed={thoughtsFeed} setThoughtsFeed={setThoughtsFeed} />
    </section>
  );
};

export default ThoughtsFeed;