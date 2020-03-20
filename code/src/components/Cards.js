import React, { useState } from "react";
import Moment from 'react-moment';

export const Cards = ( {info} ) => {
    const [hearts, setHearts] = useState(info.hearts)

    const handleHearts = (event) => {
        event.preventDefault()
        setHearts(hearts+1)
      }

  return (
          <article className = "card" key= {info.id}>
              <p>{info.message}</p>
              
              <div><button className = "heart" onClick = {handleHearts} >&#9829;</button> <p>x {hearts}</p> </div>
              <p><Moment fromNow>{info.createdAt}</Moment></p>
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

 
// export default class MyComponent extends React.Component {
//     render() {
//         return (
//             <Moment toNow>1976-04-19T12:59-0500</Moment>
//         );
//     }
// } <Moment date={info.createdAt} liveUpdate>
  // {moment => moment.fromNow()}
  // </Moment>
// <time>40 years ago</time>