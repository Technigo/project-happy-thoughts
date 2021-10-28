import React, { useState } from "react";
import moment from 'moment';


const List = ({messages}) => {


return (
      
<div className="messageContainer"> 
{messages.map((message) => (
<div className="content" key={message.id}>
   
<p>{message.message} </p>
<div className="iconAndTime">
<p ><span role='img' aria-label='heart-emoji' className="icon">
          ❤️</span><span className="like">  x {message.hearts} </span></p>
          <p className="time">{moment(message.createdAt).fromNow()}</p>
 </div>
</div>
))}

</div>
    )




}

export default List;
