import React, { useEffect } from 'react';

const ShowMessage = ({ message }) => {
  useEffect(() => {
    console.log('component did mount')
    return (
      console.log('component unmounted')
    )
  })
  return (
    <div className="show-message">
      MESSAGE
    </div>
  );
}

export default ShowMessage