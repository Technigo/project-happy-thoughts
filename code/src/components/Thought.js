import React, { useState } from 'react';
import Heart from './Heart';

const Thought = ({ id, message, hearts }) => {
  const [heartCount, setHeartCounter] = useState(hearts)
  const handleHeartBtnClick = () => {
    console.log(id)
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${id}/like`, options)
      .then((response) => response.json())
      .then(() => setHeartCounter(heartCount + 1))
  }

  return (
    <div className="thought" key={id}>
      <p>{message}</p>
      <Heart
        likes={heartCount}
        heartBtnClick={handleHeartBtnClick}
        thoughtId={id} />
      <p> x {heartCount}</p>

    </div>
  )
}

export default Thought