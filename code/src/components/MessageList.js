import React from "react";


const MessageList = ({ loading, messageList, hearts, addLike, id, setMessageList }) => {
  if (loading) {
    return (
    <h1>Loading in progress...</h1>
    ) 
  }
    /*
  const handleClick = () => {
    
    fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${id}/like`, {
      method: 'POST',
      body: '',
      headers: { 'Content-Type': 'application/json' }
    }).then(() => onLiked(id))
  }   */

  const handleLikes = () => {
    //Stretch goal: created a click counter so we know how many times the Heart button
    //has been clicked and send that data in the callback function to App component
    let clicks = 0;
    clicks += 1;
    fetch(`https://vane-happy-thoughts.herokuapp.com/thoughts/${id}/like`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      //addLike is a function we got from App sent as prop, and is responsible for visually
      //adding +1 to the amount of likes a thought has (it is explained in the App component)
    }).then(() => {
      addLike(id, clicks);
    });
  };
  
  return (
    <section>
          {messageList.map((event) => (
            <div key={event._id} className="message-box">
              
              <p className="message">{event.message}</p>
              
              <div className="heart-counter-container">
                <span className="heart-counter">
                  <button 
                  className="heart-button" 
                  onClick={handleLikes}>❤️</button> x {hearts}
                  
                </span>
                
              </div>

            </div>
            
          ))}
        </section>
      )
    }

export default MessageList