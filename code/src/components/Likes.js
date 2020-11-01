import React from 'react';

export const Likes = ({ likes, onHeartsChange, id }) => {

    const onClickedHeart = () => {
        onHeartsChange(id)
    }

    return (
        <div className="likes-container">
             <button
            onClick={onClickedHeart}
            className={
              hearts > 5
                ? "superLiked"
                : hearts > 0
                ? "liked"
                : "notLiked"
            }
          >
            <span role="img" aria-label="Heart">
              {"❤️"}
            </span>
          </button>
          x {hearts}
            <p className="likes">x {likes}</p>
        </div>
    )
}




//     return (
//         <div className="likes-container">
//             <button 
//                 className={`like-button ${likes > 0 ? 'liked' : ''}`}
//                 onClick={handleClick}
//                 >
//                 <span 
//                     className="heart" 
//                     role="img" 
//                     aria-label="heart">
//                     ❤️ 
//                 </span>
//             </button>
//             <p className="likes">x {likes}</p>
//         </div>
//     )
// }