import React from "react";

export const Cards = ({ thoughts, setThoughts }) => {
  return (
<section className="card-box">
{thoughts.map((thought)=>{
          return(<article className = "card" key= {thought.id}>
              <p>{thought.message}</p>
              <p>{thought.hearts}</p>
              <p>{thought.createdAt}</p>
              </article>)
        })}
</section>
  );
};

// {
//     "_id": "5e7347172b32840017dfddd4",
//     "message": "Perhaps one more",
//     "hearts": 2,
//     "createdAt": "2020-03-19T10:19:03.868Z",
//     "__v": 0
// },