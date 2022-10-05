/* import React, { useEffetc } from 'react'; */
import React from 'react';

const SubmitButton = ({ input }) => {
  return (
    <section>
      <button
        type="submit"
        disabled={input.length < 5 || input.length > 140}>
      ❤️ Send Happy Thoughts! ❤️
      </button>
    </section>
  )
}

export default SubmitButton