import React from 'react'
// import handleFormSubmit from 'smarts.js' /* all relevant API crunching functions */

const InputThoughts = ({ setThoughts }) => {

  return (
    <section>
      <article>
        <form onSubmit={() => console.log("ONSUBMIT") /* handleFormSubmit(setThoughts) */}>
          <input type="input" />
          <button type="submit">Send happy thought</button>
        </form>
      </article>
    </section>
  )
}

export default InputThoughts