import React, { useState } from "react";
import moment from "moment";
import { LIKES_URL } from "utils/urls";

export const Likes = ({ hearts, id, date }) => {
    const [like, setLike] = useState(hearts)
    const [yourLike, setYourLike] = useState(JSON.parse(localStorage.getItem(id)) + 0 )

    
    const onLikesIncrease = () => {

        fetch(LIKES_URL(id), {
            method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
        })
          .then((res) => res.json())
          .then(() => {}, [])
    
          setLike((oldState) => oldState + 1)
          setYourLike((oldState) => oldState + 1)
          localStorage.setItem(id, JSON.stringify(yourLike + 1))
      }

return(
    <div className="likesMainContainer">
        <div className="likesContainer">
            <div>
                <button 
                    className={yourLike > 0 ? "likeBtn-liked" : "likeBtn-not-liked"}
                    onClick={() => onLikesIncrease()}>
                    <span 
                    className="heartEmoji"
                    role="img" 
                    aria-label="heart emoji">💙</span></button>
                <span> X {like}</span>
            </div>
            <p className="date">{moment(date).fromNow()}</p>
        </div>
        <span className="yourLikes">You have liked this thought {yourLike} {yourLike > 1 ?  `times`  : `time`}</span>
    </div>
)
}