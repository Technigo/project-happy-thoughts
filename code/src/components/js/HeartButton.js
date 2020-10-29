import React from "react"

import "../css/heartButton.css"

export const HeartButton = ({ onLiked, heart, id }) => {
  const handleClick = () => {
    fetch(`https://happy-thoughts-technigo.herokuapp.com/${id}/like`, {
      method: "POST",
      body: "",
      headers: { "Content-Type": "application/json" },
    }).then(() => onLiked(id));
  };

  return (
    <div className="icon-wrapper">
      <button
        className="heart-button"
        onClick={handleClick}
        style ={{ background: heart > 0 ? "#FFADAD" : "#EAEAEA" }}
        >
          <span role="img" aria-label="heart">{'❤️'}</span>
        </button>
        <p className="counted-hearts">x {heart} </p>
    </div>
  )

}

