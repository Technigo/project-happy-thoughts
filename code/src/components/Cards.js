import React, { useState, useEffect } from "react";
import Moment from 'react-moment';

export const Cards = ( {info} ) => {
    const [myHearts, setMyHearts] = useState(info.hearts)
    const [clicked, setClicked] = useState(false)
    const [count, setCount] = useState(0);
    const myID = info._id

    const handleHearts = (event) => {
        event.preventDefault()
        setMyHearts(myHearts+1)
        setCount(count+1)
        fetch(`https://technigo-thoughts.herokuapp.com/${myID}/like`, { 
          method: 'POST', 
          headers: {'Content-Type': 'application/json'},
            // 'Content-Type': 'application/x-www-form-urlencoded',
          }).catch((error) => {
            console.error('Error:', error);
          });
        
        
      }
      // useEffect(() => {
      //   if (clicked){

      //   }
      //     console.log(myHearts)

      // }, [myHearts])


      //POST https://technigo-thoughts.herokuapp.com/THOUGHT_ID/like
 
    


  return (
          <article className = "card" key= {info.id}>
              <p className="message">{info.message}</p>
              <div><button className = "heart" onClick = {handleHearts} >&#9829;</button> <p>x {myHearts}</p> </div>
              {(count>0) && <p className = "liked">Liked {count} times</p>}
              <p className="time"><Moment fromNow>{info.createdAt}</Moment></p>
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