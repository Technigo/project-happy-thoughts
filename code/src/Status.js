import React, {useState, useEffect} from 'react'

const Status = () => {
    const [recentMessages, setRecentMessages] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(
        () => { 
    fetchRecentMessages() },
    [])

    const fetchRecentMessages = () => {
        setLoading(true)
        fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')  
          .then((res) => res.json())
          .then((data) => setRecentMessages(data))
          .finally(() => setLoading(false))
          
        
        }   

        // if (loading) {
        //     <p>Loading data...</p>
        // }

 return (
     <div className="container">
         {recentMessages.map((singleMessage) => (
             <article key={singleMessage._id}>
                 <h4>
                     {singleMessage.message}</h4>
                 
             </article>
         ))}
     </div>
 )

}


export default Status