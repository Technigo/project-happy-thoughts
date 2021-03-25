import React from 'react'
import ThoughtsCard from './ThoughtsCard';

const ThoughtsContainer = (props) => {
  return (
    <div className="thoughts-container"> {
      props.thoughts.map((props) => 
      <ThoughtsCard
        key = {props._id}
        message = {props.message}
        hearts = {props.hearts}
        time ={props.createdAt}
      />
      )};
    </div>
  );
};

export default ThoughtsContainer;