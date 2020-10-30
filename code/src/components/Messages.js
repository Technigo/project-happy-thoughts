import React, { useEffect, useState } from 'react';
import moment from "moment";


export const Messages = (props) => {
    const MESSAGES_URL = 'https://happy-thoughts-technigo.herokuapp.com/thoughts';
    const [messages, setMessages] = useState([]);
   const [clickLike, setClickLike] = useState(0);
    useEffect(() => {

    
    fetch(MESSAGES_URL)
    .then((res) => {
        return res.json();
    } )
    .then((data) => {
        setMessages(data)
    });
},[]);



const handleLiked = () => {
    fetch(` https://happy-thoughts-technigo.herokuapp.com/thoughts/${_id}/like`,{
        method: 'POST',
        body:'',
        headers: { 'Content-Type': 'application/json'}
    }).then(() => onLiked(_id))

 
}


    return <div className="form-container">{messages.map((message) => {
        return  <div className="message" key={message._id}>
        {message.message} 
       
        <div className="form">
        <span className="message-time">
        {moment(message.createdAt).fromNow()}
        </span>
        <div className="likes">
        <p class="total-likes"> x {clickLike}</p>
        <button 
        onClick={() => handleLiked()}
        className="like"
        type="submit"
        ><span role="img" aria-label="heart" >❤️</span>
        
        </button>
      </div>
        </div>
       </div>
        
            })}
        </div>;

        
}; 

