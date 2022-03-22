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
                 <h4 className="sent-messages">
                     {singleMessage.message}</h4>
                {/* <button>
                <link rel="icon" type="image/png" sizes="72x72" href="">
                <link rel="apple-touch-icon" type="image/png" sizes="72x72" href=".../icons8-red-heart-72.png">
                <meta name="msapplication-square70x70logo" content=".../icons8-red-heart-70.png">
                <meta name="msapplication-TileColor" content="#C0FFEE">
                <meta name="application-name" content="Beautiful application name">
                </button> */}
                 
             </article>
         ))}
     </div>
 )

}


export default Status