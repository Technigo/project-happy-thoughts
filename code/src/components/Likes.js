import React from 'react';

const Likes = (props) => {
            return (
                    <div className="likes-container">
                            <button className={`heart-button ${props.likes > 0 ? 'liked' : ''}`}>
                                <span className="heart" role="img" aria-label="heart">
                                    ❤️ 
                                </span>
                            </button>
                            <p>
                                x {props.likes}
                            </p>
                    </div>
                )
            }

export default Likes; 