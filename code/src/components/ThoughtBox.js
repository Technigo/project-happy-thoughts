import React, { useEffect } from 'react';
import { formatDistance } from 'date-fns';
import HeartButton from './HeartButton';

const ThoughtBox = ({
  thoughts,
  loading,
  setLoading,
  fetchThoughts,
  clickCount,
  setClickCount
}) => {
  useEffect(() => {
    setLoading(true);
    fetchThoughts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      {loading && (<h3>Loading...</h3>)}
      {!loading && thoughts.map((thought) => {
        return (
          // eslint-disable-next-line no-underscore-dangle
          <div className="thought-box" key={thought._id}>
            <p>{thought.message}</p>
            <div className="thought-details">
              <div className="thought-button-counter">
                <HeartButton
                  buttonText="&#10084;&#65039;"
                  aria-label="heart icon"
                  textColor="black"
                  buttonColor="#e6e6e6"
                  likesColor="pink"
                  buttonWidth="40px"
                  buttonHeight="40px"
                  buttonRadius="50%"
                  likes={thought.hearts}
                  // eslint-disable-next-line no-underscore-dangle
                  thoughtId={thought._id}
                  fetchThoughts={fetchThoughts}
                  clickCount={clickCount}
                  setClickCount={setClickCount} />
                <p>x {thought.hearts}</p>
              </div>
              <div className="timestamp">
                {/* eslint-disable-next-line max-len */}
                <p>{formatDistance(new Date(thought.createdAt), Date.now(), { addSuffix: true })}</p>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default ThoughtBox