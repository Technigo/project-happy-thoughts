import React from 'react'

export const SubmitThoughts = ({ handleFormSubmit, submitThoughts, setSubmitThoughts }) => {
  <form onSubmit={handleFormSubmit}>
    <textarea type="text" value={submitThoughts} onChange={(event) => setSubmitThoughts(event.target.value)} />
    <p>
      <button type="submit">Submit form</button>
    </p>
  </form>
}