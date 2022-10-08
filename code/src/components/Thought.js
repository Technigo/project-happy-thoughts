import React, { useState } from 'react';
import Moment from 'react-moment';
import Heart from './Heart';

const Thought = ({ handleTotalLikesCallback, id, message, hearts, createdAt, posted }) => {
  const [heartCount, setHeartCounter] = useState(hearts)
  const [clicked, setClicked] = useState(false)
  // const [totalLikes, setTotalLikes] = useState(Number(localStorage.clickcount) + 1)

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
        handleTotalLikesCallback()
        setTimeout(() => { setClicked(false); }, 600)
      })
  }
  return (
    <div className={`${posted ? 'newPost' : 'thought'}`} key={id}>
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
        {/* <div> you like this x {totalLikes}</div> */}
        <Moment fromNow>{createdAt}</Moment>
      </div>
    </div>
  )
}

export default Thought
