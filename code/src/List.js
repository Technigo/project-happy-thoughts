import React, { useState, useEffect } from "react";


const List = () => { 
    const MESSAGES_URL ='https://happy-thoughts-technigo.herokuapp.com/thoughts';
    const [messages , setMessages] = useState ([]);
    useEffect(() => {

        fetch (MESSAGES_URL)
        .then(res => res.json())
        .then(json => setMessages(json))
        }, [])
        //.then ((data) => {
      // console.log(data);
      //  data.reverse();  
        
    //const filteredMessages = data.filter(message => message.message );

    // setMessages(filteredMessages);
   // });
//}, []);  

    return(
        <section className ="list">
            {messages.map((message) =>  {
                return(
                    <>
                <p className="previous-messages" key={message._id}>
                    {message.message}
                </p>
                </>
                );
            })};
              
        </section>
    )
}

export default List; 