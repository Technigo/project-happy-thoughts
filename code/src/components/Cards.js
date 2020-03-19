import React, { useState } from "react";

export const Cards = ( {info} ) => {
    const [hearts, setHearts] = useState(info.hearts)

    const handleHearts = (event) => {
        event.preventDefault()
        setHearts(hearts+1)
      }

  return (
          <article className = "card" key= {info.id}>
              <p>{info.message}</p>
              <p>{hearts}</p>
              <button onClick = {handleHearts} >More Love</button>
              <p>{info.createdAt}</p>
              </article>
     
  );
};

// {
//     "_id": "5e7347172b32840017dfddd4",
//     "message": "Perhaps one more",
//     "hearts": 2,
//     "createdAt": "2020-03-19T10:19:03.868Z",
//     "__v": 0
// },