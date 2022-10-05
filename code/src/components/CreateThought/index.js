import React from 'react';

const CreateThoughts = ({ newThought, setNewThought, fetchThoughts }) => {
  const onFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: newThought
      })
    };

    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts', options)
      .then((res) => res.json())
      .then(() => fetchThoughts())
      .finally(() => setNewThought(''));
  };

  const handleChange = (event) => {
    setNewThought(event.target.value);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <h1>What&apos;s making you happy right now?</h1>
      <textarea value={newThought} onChange={handleChange} />
      <button type="submit">Send Happy Thought</button>
    </form>
  );
};

export default CreateThoughts;
