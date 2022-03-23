import React from "react";

const Input = ({ message, onInputChange, onFormSubmit} ) => {

  return (
    <header>
      <label htmlFor="thoughtInput" aria-label="thoughtInput"/>
      <form onSubmit={onFormSubmit}>
        <h1>HAPPY THOUGHTS</h1>
        <textarea value={message} onChange={onInputChange}/>
        <button type="submit">SEND HAPPY THOUGT</button>
      </form>
    </header>
  )
}

export default Input;