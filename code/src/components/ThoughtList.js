/* eslint-disable no-underscore-dangle */
/* eslint-disable no-shadow */
import React from 'react';
import { formatDistance } from 'date-fns';

const ThoughtList = ({ loading, thoughtList, setThoughtList }) => {
  if (loading) {
    return <h1>loading...</h1>
  }

  const onThoughtCheckChange = (thought) => {
    setThoughtList((thoughtList) => thoughtList.map((singleThought) => {
      // eslint-disable-next-line no-underscore-dangle
      if (singleThought._id === thought._id) {
        return { singleThought, isChecked: !singleThought.isChecked };
      }
      return singleThought;
    }));
  }

  return (
    <section>
      {thoughtList.reverse().map((thought) => (
        <div key={thought._id}>
          <h4>{thought.description}</h4>
          <input
            type="checkbox"
            onChange={() => onThoughtCheckChange(thought)}
            checked={thought.isChecked} />
          <p>{formatDistance(new Date(thought.createdAt), Date.now(), {
            addSuffix: true
          })}
          </p>
        </div>
      ))}
    </section>
  )
}
export default ThoughtList;