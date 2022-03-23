import React from 'react'

const Status = ({ loading, recentMessages, onHeartSubmit}) => {
     if (loading) {
            return (<p>Loading data...</p>)
        }

 return (
     <div>
         {recentMessages.map((singleMessage) => (
             <article key={singleMessage._id}>
                <p className="sent-messages">
                     {singleMessage.message}</p>

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
                    
                </div> 

                
                
                
               
                 
             </article>
             ))}

            
     </div>
 )

}


export default Status