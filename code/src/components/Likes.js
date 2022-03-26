import React, { useState } from "react";
import moment from "moment";
import { LIKES_URL } from "utils/urls";

export const Likes = ({ hearts, id, date }) => {
    const [like, setLike] = useState(hearts)
    const [yourLike, setYourLike] = useState(false)
    const [yourPreviousLikes, setYourPreviousLikes] = useState(
        JSON.parse(localStorage.getItem(id)) + 0
      )
    console.log('yourlike:', yourLike)
    console.log('yourpreviouslikes', yourPreviousLikes);
    console.log('testing',JSON.parse(localStorage.getItem(id)) );
    
    const onLikesIncrease = () => {
        fetch(LIKES_URL(id), {
          method: "POST",
          body: "",
          headers: { "Content-Type": "application/json" }
        })
          .then((res) => res.json())
          .then(() => {}, []);
    
        if (yourLike === true){
            setYourLike(false)
            setYourPreviousLikes(false)
            localStorage.setItem(id, JSON.stringify(yourPreviousLikes))
            setLike((oldState) => oldState - 1)
        }
        else {
            setYourLike(true)
            setYourPreviousLikes(true)
            localStorage.setItem(id, JSON.stringify(yourPreviousLikes))
            setLike((oldState) => oldState + 1)
        }
      }

return(
    <div className="likesContainer">
        <div>
            <button 
                className={yourPreviousLikes === true ? "likeBtn-liked" : "likeBtn-not-liked"}
                onClick={() => onLikesIncrease()}><span 
                role="img" 
                aria-label="heart emoji">❤️</span></button>
            <span>{yourPreviousLikes === true ?  ` you and ${like} others`  : ` X ${like}`}</span>
            <span> Storaged likes: {yourPreviousLikes}</span>
        </div>
        <p className="date">{moment(date).fromNow()}</p>
    </div>
)
}