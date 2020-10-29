import React from 'react';

const Likes = ({ likes, onHeartsChange }) => {

    const handleClick = () => {
        onHeartsChange(likes)
    }

    return (
        <div className="likes-container">
            <button 
                className={`heart-button ${likes > 0 ? 'liked' : ''}`}
                onClick={handleClick}
                >
                <span className="heart" role="img" aria-label="heart">
                    ❤️ 
                </span>
            </button>
            <p>x {likes}</p>
        </div>
    )
}

export default Likes; 