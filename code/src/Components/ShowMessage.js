/* eslint-disable */
import React, { useEffect } from 'react';

const api = 'https://happy-thoughts-technigo.herokuapp.com/thoughts'

const ShowMessage = ({ message }) => {
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
    <div className="show-message">
      <p>{message}</p>
      <button onClick={handleClick}>❤️</button>
    </div>
  );
}

export default ShowMessage