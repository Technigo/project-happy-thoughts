/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable no-unused-vars */
import React from 'react';

export const Input = (props) => {
  console.log(props);
  const handleFormSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="thoughts">
          Whats making you happy right now?
          <input
            name="thoughts"
            type="text"
            value="sdgf"
            // onChange={props.setNewPost((event) => {
            //   return event.target.value;
            // })}
          />
        </label>
        <button type="submit">Send Happy Thought</button>
      </form>
    </div>
  );
};
