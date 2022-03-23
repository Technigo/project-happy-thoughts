import React from 'react'

const Status = ({ loading, recentMessages}) => {
     if (loading) {
            return (<p>Loading data...</p>)
        }

 return (
     <div>
         {recentMessages.map((singleMessage) => (
             <article key={singleMessage._id}>
                 <h4 className="sent-messages">
                     {singleMessage.message}</h4>
                    
                    <button className="heart-button">
                    <span role="img" aria-label="heart emoji"> ❤️</span>
                    </button>
               
                 
             </article>
         ))}
     </div>
 )

}


export default Status