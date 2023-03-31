/* eslint-disable no-underscore-dangle */
import React from 'react';
import { formatDistance } from 'date-fns';

// the ThoughtList-component renders a list of thoughts that are passed in as props.
// The loading state is used to render a loading message while the data is being fetched.
// The onLikesIncrease function is called when the user clicks on the heart button to
// increase the number of hearts for a specific thought.
export const ThoughtList = ({ loading, thoughts, onLikesIncrease, clickCount }) => {
  if (loading) {
    return <div className="Loading">Loading</div>;
  }
  const OnLikesIncrease = (id) => {
    onLikesIncrease(id);
  }
  return (

    <div className="list-wrapper">
      <section>
        {thoughts.map((list) => (
          <div className="Thoughts" key={list._id}>
            <p className="thought-text">{list.message}</p>
            <div className="likes">
              <button
                type="button"
                className={(list.hearts === 0 ? 'like-btn' : 'no-like-btn')}
                onClick={() => OnLikesIncrease(list._id)}>
                ❤️
              </button>
              <p className="counter">x {list.hearts + clickCount}</p>
              {/*  <p className="counter">x {list.hearts}</p> */}
              <p className="date">
                {formatDistance(new Date(list.createdAt), Date.now(), { addSuffix: true })}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}