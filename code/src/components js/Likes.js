import React from 'react';
import "components css/likes.css";
import IconButton from "images/iconfinder_86_815175.png";

export const Likes = ({getMessage,hearts,id}) => {
  const URL_LIKES = `https://happy-thoughts-liza.herokuapp.com/thoughts/${id}/like`
  const postLike = () => {
    fetch(URL_LIKES, {
      method: "POST",
      headers: {"Content-Type" : "application/json"}
    }).then(() => getMessage())
  }
  const likesColored = () => {
    if (hearts > 5) {
    return "superLiked"
    } else if ( hearts > 0) {
    return "liked"
    } else {
    return "not-liked"
  } 
}
return(
  <p className="likes">
    <button onClick={postLike}
            className={`button-like ${likesColored(hearts)}`}
    >
      <img className="heart-icon" src={IconButton} alt= "heart" aria-label="Heart"/>
    </button> 
    <span className="numberOfHearts">x {hearts}</span> 
  </p>
  )
}  