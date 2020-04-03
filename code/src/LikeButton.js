import React from 'react'
import { Emoji } from './Emoji'


//The LikeButton will pass two props, the object thought, and the function onLiked.
//The thought will bring two props, hearts and _id
export const LikeButton = ({ thought, onLiked }) => {
  const { hearts, _id } = thought

  //When the button that belongs to a specific thought (with a specific id) is clicked the handleClick function 
  //will post "or address" this thought and the onLiked function for this thought will run. 
  const handleClick = () => {
    fetch(`https://technigo-thoughts.herokuapp.com/${_id}/like`, {
      method: 'POST',
      body: '',
      headers: { 'Content-Type': 'application/json' }
    }).then(() => onLiked(_id))
  }

  return (
    <span>
      <button
        //When the button is clicked the handleClick function will run.
        onClick={handleClick}
        //This I understand, the css class changes depending on how many hearts (or "likes") the thought has.
        //(it will change color from grey to pink if there are more hearts then 0).
        className={
          hearts > 0 ? 'likeButton' : 'notLiked'
        }
      >
        <span role='img' aria-label='Heart'>
          <Emoji symbol="❤️" />
        </span>
      </button>
      x {hearts}
    </span>
  )
}


