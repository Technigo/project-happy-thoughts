import React, { useState, useEffect } from 'react'

export const LikeHearts = () => {
  const MESSAGES_URL = "https://technigo-thoughts.herokuapp.com"
  const [hearts, setHearts] = useState([])

  useEffect(() => { 
    fetch(MESSAGES_URL)
      .then((res) => {
        return res.json();
      })
      .then(heart => {
        setHearts(heart)
      });

  }, []);

  return (
    <div>
      {hearts.map(like => (
        <p key={like.createdAt}>{like.hearts}
        </p>
      ))}
    </div>

  )
}
