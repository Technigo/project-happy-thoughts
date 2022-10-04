import React, { useEffect } from 'react';

const ShowMessage = ({ newMessage, setNewMessage }) => {
  useEffect(() => {
    console.log('component did mount')
    return (
      console.log('component unmounted')
    )
  })
  return (
    <div className="show-message">
      <p>message</p>
    </div>
  );
}

export default ShowMessage