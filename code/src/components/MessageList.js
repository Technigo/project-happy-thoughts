// import React, { useEffect, useState } from 'react';

import React from 'react';
import moment from 'moment';


export const MessageList = ({ message, hearts }) => {


  const  onClickedHeart = () => {
      hearts(message._id)
  }


return (
    <section>


        
    <div className="message-list-container">
        <h3 className="message" key={ message._id}> { message.message} </h3>                                      
    </div>

          <article className="messages-stored">
          <h3 className="message">{ message.message}</h3>
          <p>
              <button 
              onClick={onClickedHeart}
                  className= {message.hearts > 5 ? 'superLiked' : hearts > 0 ? 'liked' : 'notLiked'}>      
              <span role="img" aria-label="Heart" >
              {'❤️'}
              </span>    
              </button>
              x { message.hearts}
          </p>
              <p className="post-time">{moment( message.created).fromNow()}</p>
          </article>
      
          </section>
) 

}

{/* // original
// export const MessageList = ({ messageList }) => {

//     return (
//         <div className="message-list">
//             {messageList.map(message => (
//             <p className="message" key={message.created}>
//                         {message.message}
//                 <span className="message-time">
//                  {moment(message.created).fromNow()}
//                 </span>
//             </p>
//                 ))
//             }
//         </div>
//     );
// } */}




  
  





