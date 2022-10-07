import React from 'react';
import moment from 'moment';
/* import { formatRelative } from 'date-fns'; */

// eslint-disable-next-line no-unused-vars
const ThoughtsList = ({ loading, thoughtsList, setThoughtsList }) => {
  if (loading) {
    return <h1>Loading in progress...</h1>
  }
  /* const onThoughtCheckChange = (thought) => {
    // eslint-disable-next-line no-shadow
    setThoughtsList((thoughtsList) => thoughtsList.map((singleThought) => {
      // eslint-disable-next-line no-underscore-dangle
      if (singleThought._id === thought._id) {
        return { singleThought, isChecked: !singleThought.isChecked };
      }
      return singleThought;
    }));
  } */
  return (
    <section>
      {thoughtsList.reverse().map((thought) => (
        // eslint-disable-next-line no-underscore-dangle
        <div key={thought._id}>
          <h4>{thought.message}</h4>
          {/* <input onChange={() => onThoughtCheckChange(thought)}
        type="checkbox" checked={thought.isChecked} /> */}
          <p>{moment(thought.createdAt).fromNow()}</p>
        </div>
      ))}
    </section>
  );
}

export default ThoughtsList;
