/* eslint no-underscore-dangle: 0 */
import React, { useState, useEffect } from 'react';
import { formatDistance } from 'date-fns';
import { ThoughtForm } from './ThoughtForm';
import { Loader } from './Loader';
import { Background } from './Background';

/* const API = 'https://project-happy-thoughts-api-3t72lksv4a-lz.a.run.app'
 */
export const ThoughtFeed = () => {
  const [thoughtList, setThoughtList] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [likeCount, setLikeCount] = useState(0)

  const fetchThoughts = () => {
    fetch('https://project-happy-thoughts-api-3t72lksv4a-lz.a.run.app/thoughts')
      .then((response) => response.json())
      .then((data) => setThoughtList(data.response))
      .catch((error) => console.log(error))
      .finally(() => {
        setTimeout(() => setIsLoading(false), 2000)
      })
  }

  useEffect(() => {
    setIsLoading(true);
    fetchThoughts();
  }, []);

  const handleLikes = (_id) => {
    setLikeCount(likeCount + 1)
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    fetch(`https://project-happy-thoughts-api-3t72lksv4a-lz.a.run.app/${_id}/like`, options)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const updatedThoughtList = thoughtList.map((thought) => {
          if (thought._id === data.response._id) {
            return {
              ...thought,
              heart: data.response.heart
            };
          }
          return thought;
        });
        setThoughtList(updatedThoughtList);
      })
      .catch((error) => console.error(error));
  }

  return (
    <div className="main-wrapper">
      <Background />
      <div className="feed-wrapper">
        <section className="form-container">
          <ThoughtForm likeCount={likeCount} />
        </section>
        <section className="feed-container">
          {!isLoading && thoughtList.map((thought) => {
            return (
              <div key={thought._id} className="card">
                <p className="happy-message">{thought.message}</p>
                <div className="card-details">
                  <div className="heart-container">
                    <button
                      type="button"
                      className={`heart-button ${thought.heart > 0 ? 'heart-active' : ''}`}
                      onClick={() => { handleLikes(thought._id, thought.heart); }}>
                      <span
                        role="img"
                        className="heart-icon"
                        aria-label="Like post">
                        ❤️
                      </span>
                    </button>
                    <span className="total-hearts">x {thought.heart}</span>
                  </div>
                  <p className="date">
                    <span className="empasis">{thought.category}</span>
                    <span className="span-blue">
                      {formatDistance(new Date(thought.createdAt), Date.now(), { addSuffix: true })}
                    </span>
                    <span className="span-blue">{`${thought.name === '' ? '' : 'by'}`} <span className="empasis">{thought.name}</span></span>
                  </p>
                </div>
              </div>
            )
          })}
        </section>
      </div>
      {isLoading && (<Loader />)}
    </div>
  )
}

