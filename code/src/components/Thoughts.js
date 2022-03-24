import React from "react";
import { formatDistanceToNow } from 'date-fns';

const Thoughts = ({ loading, thoughts, onHeartClick }) => {

  if (loading) {
    return <h1>Loading...</h1>
  }

  return (
    <div className="happy-thoughts">
        {thoughts.map((thought) => (
          <div className="happy-thought" key={thought._id}>
              <p className="thought-message">{thought.message}</p>
              <div className="thought-footer">
                <div className="thought-heart">
                  <button className={thought.hearts > 0 ? 'moreThanZeroClicks' : 'zeroClicks' } onClick={() => onHeartClick(thought._id)}>
                    <span className="heart-emoji" role="img" aria-label="Heart">❤️</span>
                  </button>
                  <div className="thought-heart-times">x{thought.hearts}</div>
                </div>
                <p>{formatDistanceToNow(new Date(thought.createdAt))} ago</p>
              </div>
          </div>
        ))}
    </div>
  )
}

export default Thoughts;