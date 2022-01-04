import React, { useState } from 'react';

export const Form = ({newThought, setNewThought, handleFormSubmit, username, setUsername }) => {
	console.log(username)
    // when submitting form, handleFormSubmit function trigged, which is in App.js
  return (
    <form onSubmit={handleFormSubmit} className="form" >
      <h1 className="form-title" >What makes you happy? &hearts;</h1>
      <textarea 
        id="newThought"
        type="text" 
        maxLength="140"
        value={newThought}
        placeholder="Write your happy thought here"
        onChange={(e) => setNewThought(e.target.value)}
        />
      <p style={{ color: newThought.length > 130 ? "red" : "green" }} >
        {newThought.length}/140
      </p>
			<label htmlFor="Name">Name 
			<input type="text" 
			value={username}
			onChange={(e) => setUsername(e.target.value)}/></label>
      <button 
        className="form-button"
        type="submit" 
        disabled={newThought.length < 5 || newThought.length > 140} >
            &hearts; Send &hearts;
      </button>
    </form>
  );
};


