/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { SendButton } from 'components/SendButton';

export const ThoughtsInput = () => {
  return (
    <div className="inputBox">
      <p>&apos;Whats making you happy right now?</p>
      <textarea
        className="inputfield"
        value=""
        onChange="Post it to the API"
        placeholder="React is making me happy!"
        minLength="5"
        maxLength="140" />
      <SendButton />
    </div>
  )
}