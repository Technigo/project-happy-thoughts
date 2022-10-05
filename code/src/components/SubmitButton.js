/* import React, { useEffetc } from 'react'; */
import React from 'react';
import { API_URL } from 'utils/urls';

const SubmitButton = ({ input, setInput, setAllThoughts }) => {
  const handleOnSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: input })
    };
    fetch(API_URL, options)
      .then((res) => res.json())
      .then(() => { setAllThoughts(); setInput(input = ''); });
  };

  return (
    <section>
      <button
        type="submit"
        onClick={handleOnSubmit}
        disabled={input.length < 5 || input.length > 140}>
      ❤️ Send Happy Thoughts! ❤️
      </button>
    </section>
  )
}

export default SubmitButton