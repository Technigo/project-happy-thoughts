import React from 'react';

const Likes = ({ likes, onHeartsChange, id }) => {

    const handleClick = () => {
        onHeartsChange(id)
    }

    return (
        <div className="likes-container">
            <button 
                className={`like-button ${likes > 0 ? 'liked' : ''}`}
                onClick={handleClick}
                >
                <span 
                    className="heart" 
                    role="img" 
                    aria-label="heart">
                    ❤️ 
                </span>
            </button>
            <p className="likes">x {likes}</p>
        </div>
    )
}

export default Likes; 