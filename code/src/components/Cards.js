import React, { useState, useRef, useEffect } from "react";
import Moment from 'react-moment';

export const Cards = ( {info} ) => {
    const [myHearts, setMyHearts] = useState(info.hearts)
    const [likeCount, setLikeCount] = useState(0);
    const myID = info._id

    const handleHearts = (event) => {
        event.preventDefault()
        setMyHearts(myHearts+1)
        setLikeCount(likeCount+1)
        fetch(`https://technigo-thoughts.herokuapp.com/${myID}/like`, { 
          method: 'POST', 
          headers: {'Content-Type': 'application/json'},
          }).catch((error) => {
            console.error('Error:', error);
          });   
      }

  return (
          <article className = "card" key= {info.id}>
              <p className="message">{info.message}</p>
              <div><button className = {(myHearts>0) ? "heart liked" : "heart"} onClick = {handleHearts} >&#9829;</button> <p>x {myHearts}</p> </div>
              {(likeCount>0) && <p className = "liked">Liked {likeCount} times</p>}
              <p className="time"><Moment fromNow>{info.createdAt}</Moment></p>
          </article>
     
  );
};
