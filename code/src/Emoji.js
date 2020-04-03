import React from 'react';

export const Emoji = props => (
  <span
    className="emoji"
    role="img"
    aria-label={props.label ? props.label : ""} //I dont remember what this means or maybe I never got it. 
    aria-hidden={props.label ? "false" : "true"}
  >
    {props.symbol}
  </span>
);

