import React, { useState, useEffect } from "react";
import moment from "moment";


const List = () => { 
    const MESSAGES_URL ='https://happy-thoughts-technigo.herokuapp.com/thoughts';
    const [messages , setMessages] = useState ([]);
    useEffect(() => {
      
        fetch(MESSAGES_URL)
            .then((res) => {
            return res.json()
            })
            .then(data => {
                console.log(data)
                //change to better function then reverse later
                setMessages(data.reverse());

                const filteredMessages = data.filter(message => message.message );

                setMessages(filteredMessages);
            });
    }, []);  

    return(
        <section className ="list">
            {messages.map((message) =>  {
                return(
                <>
                <p className="previous-messages" key={message._id}>
                    {message.message}
                    <span className ="message-time">
                    {moment(message.created).fromNow()}
                    </span>
                </p>
                
                </>
                );
            })};
              
        </section>
    )
}

export default List; 