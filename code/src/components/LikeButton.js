import React from 'react'


export const LikeButton = (props) => {
  let changeClass = "like-button"
  if (props.thoughts.hearts > 0) {
    {changeClass = "like-button liked"}
  }
  
  return (
    <div>
                  

<button className={changeClass} onClick= {() => props.OnLikesIncrease(props.thoughts._id)}>
<span className="heart-on-button-icon" role="img" aria-label="Heart">
💗
</span>
</button>
    </div>
  )
}