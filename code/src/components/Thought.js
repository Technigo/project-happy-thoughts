import React, { useState } from 'react';
import Moment from 'react-moment';
import Heart from './Heart';

const Thought = ({ id, message, hearts, createdAt }) => {
  const [heartCount, setHeartCounter] = useState(hearts)
  const [clicked, setClicked] = useState(false)

  const handleHeartBtnClick = () => {
    setClicked(true)

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${id}/like`, options)
      .then((response) => response.json())
      .then(() => {
        setHeartCounter(heartCount + 1)
        setTimeout(() => { setClicked(false); }, 600);
      })
  }

  return (
    <div className="thought" key={id}>
      <p className="message">{message}</p>
      <div className="metadata">
        <div className="likes">
          <Heart
            clicked={clicked}
            heartBtnClick={handleHeartBtnClick}
            likes={heartCount}
            thoughtId={id} />
          <p> x {heartCount}</p>
        </div>
        <Moment fromNow>{createdAt}</Moment>
      </div>
    </div>
  )
}

export default Thought