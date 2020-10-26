import React, { useState, useEffect } from "react";
import moment from "moment";

export const Thought = (props) => {

  const[liked, setLiked] = useState(false);
  const[numLikes, setNumLikes] = useState(props.hearts);



  const handleLikeCount = (numLikes) =>{
    setNumLikes(numLikes);
    props.onLike();
  }

  const clickedLikeButton = (thoughtID) => {
    console.log("in clicklikebutton, Liked thought:" + thoughtID);
    //The user can only like a message once
    setLiked(true);
    //postLike(thoughtID);
  }

  const postLike = (thoughtID) =>{
    
    console.log("in post like, sending to api")
    console.log(thoughtID);
    var requestOptions = {
      method: 'POST',
      redirect: 'follow'
    };
    
    fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${thoughtID}/like`, requestOptions)
    .then((res) => res.json())
    //set the result from api-call in state variable.
    .then((data) => {
     console.log("Number of likes after like: ",data.hearts)
     handleLikeCount(data.hearts)
    });
  }
  useEffect(() => {
    console.log("Thought Change!");
    //here goes the api call, when state is changed to liked = true. Need to check if like === true
    //otherwise the useeffect runs anyway. 
    if(liked) postLike(props.id);
    // eslint-disable-next-line
  },[liked]); 

  return(
  <div className="thought-card">
    <p className="message">{props.message}</p>
    <div className="bottom-container">
   
    {!liked && <div>
      <button className="like-button" onClick=
      {() => clickedLikeButton(props.id)}
        ><span role="img" aria-label="heart emoji">
          ❤️</span>
          </button>
      <span className="number-of-initial-likes">x {numLikes}</span>
    </div>}
    {liked && 
    <div>
      <button disabled className="disabled-button"
        ><span role="img" aria-label="heart emoji">
        ❤️</span></button>
      <span className="number-of-likes">x {numLikes}</span>
    </div>}
    <p className="date">
    <p>{moment(props.createdAt).fromNow()}</p>
    </p></div>
  </div>
  )
}