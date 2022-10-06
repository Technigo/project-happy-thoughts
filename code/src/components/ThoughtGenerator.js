/* eslint-disable */

import React from "react";
import { formatDistance } from 'date-fns';

const ThoughtGenerator = ( {loading, thoughts, setThoughts} ) => {

const onThoughtCheckChange = (thought) => {
    setThoughts(thoughts => thoughts.map(singleThought => {
      if(singleThought._id === thought._id) {
        return {
          singleThought, isChecked: !singleThought.isChecked
        };
      }
      return singleThought;
    }));
  }

return (
  <section>
    {thoughts.map(thought => (
      <div key={thoughts._id}>
        <h4>{thought.message}</h4>
        <p>{thought.hearts}</p>
        <input onChange={() => onThoughtCheckChange(thought)} type="checkbox" checked={thought.isChecked} />
        <p>{formatDistance(new Date(thought.createdAt), Date.now(), {addSuffix: true})}</p>
     </div>  
))}
  </section>
    )
}

export default ThoughtGenerator