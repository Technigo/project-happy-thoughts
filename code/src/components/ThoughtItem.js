import React from 'react';
import { formatDistanceToNow } from 'date-fns';

const ThoughtItem = ({ loading, thoughtItem, setThoughtItem }) => {
  if (loading) {
    return <h1>Loading in progress...</h1>
  }
  const onThoughtCheckChange = (thought) => {
    setThoughtItem((thoughtItem) => thoughtItem.map((singleThought) => {{/* eslint-disable-line */}
            if(singleThought._id === thought._id) {{/* eslint-disable-line */}
        return { ...singleThought, isChecked: !singleThought.isChecked };
      }
      return singleThought;
    }));
  }
  return (
    <section>
      {thoughtItem.map((thought) => (
        <div key={thought._id}>{/* eslint-disable-line */}
          <h4>{thought.message}</h4>
          <input onChange={() => onThoughtCheckChange(thought)} type="checkbox" checked={thought.isChecked} />
          <p>{formatDistanceToNow(
            new Date(thought.createdAt),
            Date.now(),
            { addSuffix: true }
          )}
          </p>
        </div>
      ))}
    </section>
  );
}

export default ThoughtItem;