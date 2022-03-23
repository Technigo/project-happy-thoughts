import React, {useState, useEffect} from 'react'

const Status = () => {
    const [recentMessages, setRecentMessages] = useState([])
    // const [loading, setLoading] = useState(false)

    useEffect(
        () => { 
    fetchRecentMessages() },
    [])

    const fetchRecentMessages = () => {
        // setLoading(true)
        fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')  
          .then((res) => res.json())
          .then((data) => setRecentMessages(data))
        //   .finally(() => setLoading(false))
          
        
        }   

        // if (loading) {
        //     <p>Loading data...</p>
        // }

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