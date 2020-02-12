import React, { useState } from "react";
import "./heart.css";

export const Heart = (props) => {
  const [clicks, setClicks] = useState((props.hearts))

  if (!localStorage[props.id]) {
    localStorage.setItem(props.id, 0)
  }

  const handleLikeClick = () => {
    fetch(`http://localhost:8080/${props.id}/like`, {
      method: "POST",
      body: "",
      headers: { "Content-Type": "application/json" }
    }).then(() => {
      props.onThoughtLiked(props.id)
      localStorage[props.id] = Number(localStorage[props.id]) + 1
      setClicks(clicks + 1)

    })
  }
  // Det viktigaste är att du i din komponent för heart-button skapar en ny variabel - 
  //jag kallade den för clicks och att du i useState ger den värdet som hearts har. 
  //Sedan att du i handleClick efter att du fetchat tar +1, dvs. setClicks(clicks + 1) 
  //och slutligen om du vill se ökningen renderas direkt i DOM-en att du tar x {clicks} istället för heart eftersom clicks är +1 än vad hearts är
  return (
    <li>
      <button className="like-button"
        onClick={() => {
          handleLikeClick()
        }}>
        <span role="img" aria-label="heart">
          ❤️
        </span>
      </button>
      x{clicks} (you liked x{localStorage[props.id]})
    </li >
  )
}

