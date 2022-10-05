/* eslint-disable */
import React, { useEffect } from 'react';

const api = 'https://happy-thoughts-technigo.herokuapp.com/thoughts'

const ShowMessage = ({ message, createdAt, hearts }) => {
  const handleClick = () => {
    fetch(api, {
      method: 'POST',
      body: '',
      headers: {'Content-Type': 'application/json'}
    }).then(() => console.log('It is working to like!'))
  }
  useEffect(() => {
    console.log('component did mount')
    return (
      console.log('component unmounted')
    )
  })
  return (
    <section className="outer-show-message">
      <div className="inner-show-message">
        <p className="message">{message}</p>
        <div className="heart-and-counter-container">
          <span className="heart-counter"><button className="heart-btn" onClick={handleClick}>❤️</button> x {hearts}</span>
          <p className="created-at">{createdAt}</p>
        </div>
      </div>
    </section> 
  );
}

export default ShowMessage