/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';

import ThoughtForm from 'components/ThoughtForm/ThoughtForm';
import ThoughtCard from 'components/ThoughtCard/ThoughtCard';
import styles from './Feed.module.css';

const Feed = () => {
  // One state for the api response which will be the feed with thoughts
  // when map through in the ThoughtCard component:
  // And another for the loading message
  const [feed, setFeed] = useState([]);
  const [loading, setLoading] = useState(false);

  // A separate function for the GET request to the api
  // being invoked in the useEffect hook further down
  // when this component is mounted (in the App.jsx)
  const fetchThoughts = () => {
    setLoading(true);
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
      .then((res) => res.json())
      .then((data) => setFeed(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchThoughts();
  }, []);

  // if loading is true this little text will show up
  // and disappear when it's set to false
  // after the get- request is done (line 24)
  if (loading) {
    return <h3>❤️ Loading ❤️</h3>
  }

  // Here I'm mounting the two "main" components
  // and passing setThoughtsFeed to both of them
  // because it will be needed for dealing with
  // new posts posted with the ThoughtForm
  // and also for when you like a post with the
  // LikeButton mounted in the ThoughtCard component
  return (
    <section className={styles.feedGrid}>
      <ThoughtForm setFeed={setFeed} />
      <ThoughtCard feed={feed} setFeed={setFeed} />
    </section>
  );
};

export default Feed;