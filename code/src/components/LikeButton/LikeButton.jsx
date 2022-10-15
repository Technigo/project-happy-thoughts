import React , { useState } from 'react';
import styles from './LikeButton.module.css'

const LikeButton = (props) => {
  const like_url= `https://technigo-thoughts.herokuapp.com/${props._id}/like`;

  const [countLike, setCountLike] = useState(0);


  const handleClick= () => {
 setCountLike(countLike + 1);
    fetch(like_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body:""
    }).then(() => {
props.onMessageLiked(props._id)
    })
    ;
  }

  //  console.log("Hej ", setCountLike);
  return (
    <>
      <button onclick={handleClick} className={styles.likeButton}> ❤️</button>

    </>
  );
}
 
export default LikeButton;