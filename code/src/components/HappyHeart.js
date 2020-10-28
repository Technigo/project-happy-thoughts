import React from 'react' 

export const HappyHeart = ({onLiked, hearts, id}) => {
  const handleClick = () => {
    fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${id}/like`, {
      method: 'POST', 
      body: '',
      headers: { 'Content-Type': 'application/json' }
    }).then(() => onLiked(id))
  }
    return(
      <div className="heart-wrapper">
        <button 
          className="heart-button"
          onClick={handleClick}
          style={{ background: hearts > 0 ? "#FFADAD" : "#EAEAEA"}}
        >
          <span role="img" aria-label="heart">{'❤️'}</span>
        </button>
        <p className="heart-text">x {hearts}</p>
      </div>
    )
}
