/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { formatDistance } from 'date-fns';
import { NewThought } from './NewThought';
import { Loading } from './Loading'

const API = 'https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts'

export const ThoughtFeed = () => {
  const [thoughtsList, setThoughtsList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`${API}`)
      .then((res) => res.json())
      .then((data) => setThoughtsList(data))
      .catch((error) => console.log(error))
      .finally(() => { setLoading(false) })
  }, []);

  const HandleLike = (thoughtId) => {
    fetch(`${API}/${thoughtId}/like`, { method: 'POST' })
      .then((res) => res.json())
      .then((data) => {
        const UpdateHearts = thoughtsList.map((like) => {
          if (like._id === data._id) {
            like.hearts += 1
            return like
          } else { return like }
        })
        setThoughtsList(UpdateHearts)
      })
  };

  return (
    <>
      <section>
        <NewThought />
      </section>
      <section className="mainContainer">
        {!loading && thoughtsList.map((thought) => {
          return (
            <div key={thought._id} className="card">
              <p className="postText">{thought.message}</p>
              <button type="button" className={thought.hearts === 0 ? 'noLikesBtn' : 'likesBtn'} onClick={() => HandleLike(thought._id)}>
                <span role="img" className="heartEmo" aria-label="Like this post">🧡</span>
              </button>
              <span className="sumHearts">x {thought.hearts}</span>
              <p className="date"> {formatDistance(new Date(thought.createdAt), Date.now(), { addSuffix: true })}</p>
            </div>
          )
        })}
      </section>
      {loading && (<Loading />)}
    </>
  )
};
