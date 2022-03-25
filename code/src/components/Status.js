import React from 'react'
import { formatDistance } from 'date-fns'

const Status = ({ loading, recentMessages, onHeartSubmit}) => {
     if (loading) {
            return (<h1>Loading data...</h1>)
        }

 return (
     <div>
         
         {recentMessages.map((singleMessage) => (
             <article key={singleMessage._id}>
                <p className="sent-messages">
                     {singleMessage.message}
                </p>
            

                <div className="btn-group">
                    <button 
                    onClick= {() => onHeartSubmit(singleMessage._id)}
                    className={singleMessage.hearts > 0 ? "heart-btn liked" : "heart-btn"}>
                    <span role="img" 
                    aria-label="heart emoji">❤️</span>
                    </button>

                    <span 
                    key={singleMessage._id}
                    className="number-of-likes">
                        x {singleMessage.hearts}
                    </span> 

                    <span className="date">
                        {formatDistance(new Date (singleMessage.createdAt), Date.now(), {
								addSuffix: true,})}
                    </span>
                    
                </div> 

                
                
                
               
                 
             </article>
             ))}

     </div>
 )

}


export default Status