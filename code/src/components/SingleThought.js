import React, { useEffect, useState } from 'react';

const SingleThought = ({ thought, onHeartClick }) => {
  const [timeStamp, setTimeStamp] = useState(''); // Initialize with empty string
  const [isLoading, setIsLoading] = useState(true); // Initialize with loading state

  useEffect(() => {
    const fetchTimeStamp = async () => {
      const date = new Date(thought.createdAt);
      const timeDiff = Math.round((Date.now() - date) / (1000 * 60));

      if (timeDiff < 1) {
        setTimeStamp('just now');
      } else if (timeDiff < 90) {
        setTimeStamp(`${timeDiff} min ago`);
      } else {
        const hoursDiff = Math.round(timeDiff / 60);
        setTimeStamp(`${hoursDiff} hour${hoursDiff > 1 ? 's' : ''} ago`);
      }

      setIsLoading(false); // Set loading state to false when timestamp is fetched
    };

    fetchTimeStamp();
  }, [thought.createdAt]);

  console.log('singlelistitem');

  return (
    <div className="singleListItem">
      <h3 id="stretched">{thought.message}</h3>
      <div className="buttonTimestampBox">
        <div className="heartCounter">
          <button onClick={() => onHeartClick(thought)} type="button">
            <span id="heartButton">🧡</span>
          </button>
          <span> x {thought.hearts}</span>
        </div>
        {isLoading ? (
          <p className="timeStamp">Loading timestamp...</p>
        ) : (
          <p className="timeStamp">{timeStamp}</p>
        )}
      </div>
    </div>
  );
};

export default SingleThought;
