import React from "react";

export const FormButton = () => {
  return (
    <button 
      type="submit"
      className="button">
      <span role="img" aria-label="heart" className="heart">❤️</span> 
      Send Happy Thought 
      <span role="img" aria-label="heart" className="heart">❤️</span>
    </button>
  )
}