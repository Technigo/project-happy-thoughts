import React from 'react'
import moment from 'moment';


export const MessageElement = ({ message, onLikesIncrease }) => {
    

    return(
        <>
            <div className="message-container">  
                <h3>{message.message}</h3>
                <div className="likes-date-container">
                    <div className="hearts-likes-wrapper">
                        <button className="button-likes" onClick={() =>onLikesIncrease(message._id)}>
                        <span className={message.likes === 0 ? "heart-black" : "heart-red"}
                        >❤️</span>  
                        </button>
                        <p> x{message.hearts}</p>
                    </div>
                    <p className="date-posted">{moment(message.created).fromNow()} </p>
                </div>
            </div>
        </> 
    );
};

