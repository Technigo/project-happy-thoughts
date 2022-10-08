/* import React, { useEffetc } from 'react'; */
import React from 'react';
import { API_URL } from 'utils/urls';

const SubmitButton = ({ input, setInput, setAllThoughts }) => {
  const handleOnSubmit = (event) => {
    // prevents the site from reloading on every submit.
    event.preventDefault();
    // this part decides where the message should be sent and stored.
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: input })
    };
    fetch(API_URL, options)
      .then((res) => res.json())
      .then(() => { setAllThoughts(); setInput(input = ''); })
      .catch((error) => console.log(error))
      .finally(() => setInput(''));
  };

  return (
    <section>
      <button
        className="submit-button"
        type="submit"
        onClick={handleOnSubmit}
        // this makes the button disabled if input is too short or too long.
        disabled={input.length < 5 || input.length > 140}>
      ❤️ Send Happy Thoughts! ❤️
      </button>
    </section>
  )
}

export default SubmitButton