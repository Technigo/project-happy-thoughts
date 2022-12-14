/* eslint-disable operator-linebreak */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import ThoughtForm from 'components/ThoughtForm/ThoughtForm';
import ThoughtCard from 'components/ThoughtCard/ThoughtCard';
import { API_URL } from 'components/utils/api';
import styles from './Feed.module.css';

const Feed = () => {
  // One state for the api response which will be the feed with thoughts
  // when map through in the ThoughtCard component:
  // And another for the loading message
  const [page, setPage] = useState(1);
  const [feed, setFeed] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`${API_URL('thoughts')}?page=${page}&perPage=10`)
      .then((res) => res.json())
      .then((data) => setFeed(data.response))
      .catch((error) => console.error(error))
      .finally(() => {
        setLoading(false)
        window.scroll(0, 0)
      });
  }, [page]);

  // Mounting the two "main" components
  // and passing setThoughtsFeed to both of them
  // because it will be needed for dealing with
  // new posts posted with the ThoughtForm
  // and also for when you like a post with the
  // LikeButton mounted in the ThoughtCard component
  return (
    <section className={styles.feedGrid}>
      <ThoughtForm loading={loading} setFeed={setFeed} />
      <ThoughtCard feed={feed} setFeed={setFeed} />
      <div className={styles.buttonContainer}>
        <button
          className={styles.olderButton}
          type="button"
          onClick={() => setPage(page + 1)}>
          Older thoughts
        </button>
        {page > 1 &&
      <button
        className={styles.newerButton}
        type="button"
        onClick={() => setPage(page - 1)}>
          Newer thoughts
      </button>}
      </div>
    </section>
  );
};

export default Feed;