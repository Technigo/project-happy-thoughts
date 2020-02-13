import React, { useState, useEffect } from 'react';

export const Heart = () => {
  const [heartLike, setHeartLike] = useState([]);

  useEffect(() => {
    fetch('https://happy-thoughts-app.herokuapp.com/id/like', {
      method: 'POST'
    })
      .then(res => res.json())
      .then(json => {
        console.log('json', json);
        setHeartLike(json);
      });
  }, []);

  return (
    <div>
      {heartLike.map(heart => (
        <div>
          <div key={heart.heart}>{heart.heart}</div>
        </div>
      ))}
    </div>
  );
};
