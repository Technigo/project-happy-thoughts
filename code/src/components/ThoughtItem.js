import React, { useState } from 'react'
import { formatDistance } from 'date-fns'

export const ThoughtItem = ({ thought, thoughtId }) => {
  const [heartCount, setHeartCount] = useState(thought.hearts)
  const sendHearts = () => {
    // handleLikesIncrease();
    const options = {
      method: 'POST'
    }
    fetch(`https://project-happy-thoughts-api-6nzr46lxka-uc.a.run.app/thoughts/${thoughtId}/like`, options)
      .then((response) => response.json())
      .then((data) => { console.log(data); setHeartCount(data.hearts) })
      .catch((error) => console.log(error))
      .finally(() => { console.log('heart count increased') })
  }

  const heartBtn = heartCount > 0 ? 'heart-btn heart-btn-active' : 'heart-btn';

  return (
    <div className="card">
      <p className="thought-text">{thought.message}</p>

      <div className="likes">
        <div className="button-card" />
        <button
          className={heartBtn}
          type="button"
          aria-label="like this thought"
          aria-pressed={heartCount > 0 ? 'true' : 'false'}
          onClick={sendHearts}>
          <span className="heart">❤️</span>
        </button>
         x   {heartCount}
      </div>
      <p className="date">
        {formatDistance(new Date(thought.createdAt), Date.now(), {
          addSuffix: true
        })}
      </p>
    </div>
  )
};

export default ThoughtItem