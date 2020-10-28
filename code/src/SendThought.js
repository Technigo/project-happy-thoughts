import React from 'react';

export const SendThought = () => {

  return (
    <section className="send-thought">
      <form>
        <label htmlFor="your-thought">What's making you happy right now?</label>
        <textarea 
          id="your-thought" 
          name="your-thought" 
          rows="3"
          cols="33"
        >
        </textarea>
        <button>Send Happy Thought</button>
      </form>
    </section>
  );
};