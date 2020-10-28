import React from 'react' 

export const HappyHeart = () => {
    return(
      <div className="heart-wrapper">
        <button className="heart-button">
          <span role="img" aria-label="heart">❤️</span>
        </button>
        <p className="heart-text">x 10</p>
      </div>
    )
}
