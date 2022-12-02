import React from 'react';

const NewThought = ({ newThought, setNewThought, thoughts, setThoughts }) => {
  const onFormSubmit = (event) => {
    // prevent form submit from reloading page
    event.preventDefault();

    // save thought on server
    fetch('https://project-happy-thoughts-api-o4o7j2ybmq-lz.a.run.app/thoughts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: newThought })
    })
      .then((res) => res.json())
      // update list of thoughts
      .then((data) => setThoughts([data, ...thoughts]));

    // clear form
    setNewThought('')
  }

  return (
    <section className="new-container">
      <form onSubmit={onFormSubmit}>
        <p className="new-header">What&apos;s making you happy right now?</p>
        <textarea
          id="newThought"
          type="text"
          value={newThought}
          maxLength="140"
          onChange={(event) => setNewThought(event.target.value)} />
        <button className="send-button" type="submit">&#10084;&#65039; Send Happy Thought &#10084;&#65039;</button>
      </form>
    </section>
  )
}
export default NewThought;