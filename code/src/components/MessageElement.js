import React from 'react'
import moment from 'moment';


export const MessageElement = ({ message, onLikesIncrease }) => {
    

    return(
        <>
            <div className="message-container">  
                <h3>{message.message}</h3>
                <div className="likes-date-container">
                    <div className="hearts-likes-wrapper">
                        <button 
                        onClick={() => onLikesIncrease(message._id)}
                        className="button-likes" >
                        <span 
                        className= {`heart ${message.hearts === 0 ? "heart-black" : "heart-red"}`}
                        role="img" 
                        aria-label="heart"
                        >♥️</span>  
                        </button>
                        <p> x{message.hearts}</p>
                    </div>
                    <p className="date-posted">{moment(message.created).fromNow()} </p>
                </div>
            </div>
        </> 
    );
};

