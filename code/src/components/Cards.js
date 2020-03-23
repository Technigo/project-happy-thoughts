import React, { useState, useEffect } from "react";
import Moment from 'react-moment';

export const Cards = ( {info} ) => {
    const [myHearts, setMyHearts] = useState(info.hearts)
    const [count, setCount] = useState(0);
    const myID = info._id

    const handleHearts = (event) => {
        event.preventDefault()
        setMyHearts(myHearts+1)
        setCount(count+1)
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
              <div><button className = "heart" onClick = {handleHearts} >&#9829;</button> <p>x {myHearts}</p> </div>
              {(count>0) && <p className = "liked">Liked {count} times</p>}
              <p className="time"><Moment fromNow>{info.createdAt}</Moment></p>
          </article>
     
  );
};
