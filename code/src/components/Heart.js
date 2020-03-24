import React, { useState } from 'react';
import './heart.css';

export const Heart = (props) => {
  const [heartClicks, setHeartClicks] = useState((props.hearts));

  if (!localStorage[props.id]) {
    localStorage.setItem(props.id, 0)
  };

  const likeClick = () => {
    fetch(`https://technigo-thoughts.herokuapp.com/${props.id}/like`, {
      method: 'POST',
      body: "",
      headers: { "Content-Type": "application/json" }
    })
      .then(() => {
        setHeartClicks(heartClicks + 1)
      })
  };

  return (
    <div>
      <button className="heartButton" onClick={() => { likeClick() }}>
        <span role="img" aria-label="Like post">{"❤️"}</span>
      </button>
      x {heartClicks}
    </div >
  )
}