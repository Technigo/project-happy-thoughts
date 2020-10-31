

import React, { useState } from 'react';

export const MessageInput = ({ onMessageChange }) => {
    const [newMessage, setNewMessage] = useState('');


   
    // // message, get the response from the API, and then add it to 
    // // the thoughts array:
    
    const handleSubmit = event => {
        event.preventDefault();
        onMessageChange(newMessage);
        setNewMessage("");
    }

    return (

        <main className="new-message-container">
            <h2>Give me a happy message plz!</h2>
        <form onSubmit={handleSubmit}>
        
            <textarea 
                className="input-text"
                id="happyMessage"
                name="happyMessage"
                value={newMessage}
                rows="6"
                cols="35"
                onChange={event => setNewMessage(event.target.value)}
            />
            <button 
                className="message-button"
                disabled={newMessage.length < 6 || newMessage.lenght > 140 ? true : false}>
             </button>

        </form>

 </main>
    );
}


// THE HEART ICON

        
{/* <div>
        <article className="happy-thoughts">
        <h3>{message}</h3>
        <p>
            <button 
            onClick={handleClick}
                className={
                    hearts > 5 ? 'superLiked' : hearts > 0 ? 'liked' : 'notLiked'}
                    >      
            <span role="img" aria-label="Heart" >
            {'❤️'}
            </span>    
            </button>
            x {hearts}
        </p>
            <p>{moment(message.created).fromNow()}</p>
        </article>
 </div> */}




