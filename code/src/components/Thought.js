import React from "react";
import { Heart } from 'components/Heart'

export const Thought = props => {
  return (
    <div className="thought">
      <p>{props.message}</p>
      <div className="thought-stats">
        <Heart heart={props.hearts} id={props.id}/>
        <p id="thought-timer">{props.createdAt}</p>
      </div>
    </div>
  );
};
