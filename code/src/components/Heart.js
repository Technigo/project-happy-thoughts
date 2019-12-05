import React, { useState, useEffect } from 'react';
import "./heart.css";

export const Heart = (props) => {
  const initialCount = Number(window.localStorage.getItem("count") || 0)
  const [count, setCount] = useState(initialCount)
  useEffect(() => {
    window.localStorage.setItem("count", count)
  }, [count])

  const handleLikeClick = () => {
    fetch(`https://technigo-thoughts.herokuapp.com/${props.id}/like`, {
      method: "POST",
      body: "",
      headers: { "Content-Type": "application/json" }
    }).then(() => {
      props.onThoughtLiked(props.id)
    })
  }


  // const [count, setCount] = useState(0)
  // const localData = localStorage.getItem("count");
  // return localData ? JSON.parse(localData) : [];

  // useEffect(() => {
  //   localStorage.setItem("count", JSON.stringify(count))
  // }, [count])

  const handleCount = () => {
    setCount(count + 1)
  }

  return (
    <li>
      <button className="like-button"
        onClick={() => {
          handleLikeClick()
          handleCount()
        }}>
        <span role="img" aria-label="heart">
          ❤️
        </span>
      </button>
      x {props.hearts} (you liked x {count})
    </li >
  )
}

