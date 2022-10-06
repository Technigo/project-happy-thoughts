import React from "react";

const MessageList = ({ loading, messageList, setMessageList, hearts, onLiked, id }) => {
  if (loading === true) {
    return (
      <h1>Loading in progress...</h1>
      )
  }
    
  const handleClick = () => {
    fetch(API, {
      method: 'POST',
      body: '',
      headers: { 'Content-Type': 'application/json' }
    }).then(() => onLiked(id))
  }   

  return (
    <section>
          {messageList.map((event) => (
            <div key={event._id} className="message-box">
              
              <p className="message">{event.message}</p>
              
              <div className="heart-and-counter-container">
                <span className="heart-counter">
                  <button 
                  className="heart-btn" 
                  onClick={handleClick}>❤️</button> x {hearts}
                </span>
                
                
              </div>

            </div>
            
          ))}
        </section>
      )
    }

export default MessageList