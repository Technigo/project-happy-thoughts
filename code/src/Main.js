import React, { useState, useEffect } from "react";

import List from "./List";
import Send from "./Send";



const Main = () => {
    const THOUGTHS_URL ="https://happy-thoughts-technigo.herokuapp.com/thoughts";

    const [thoughts, setThoughts] = useState([]) 
    const [messages , setMessages] = useState ([]);
    
    const handleFormSubmit = (event) => {
    event.preventDefault(); 
    console.log(JSON.stringify({text: thoughts})) 


     fetch(THOUGTHS_URL, {
        method: "POST",
        headers:
        {
            "Content-Type":"application/json"
        },
        body:JSON.stringify({message: thoughts})
        }
        ).then(() => {
        window.location.reload();
        });
    }

    return (
      <>
         <form onSubmit = {handleFormSubmit}>
            <section className ="form-conatiner">
              <label htmlFor="" tabIndex ="0">
                What's making you happy right now?   
                <input
                type="text"
                onChange = {(event) => setThoughts(event.target.value)}
                />
            </label> 

            <Send />  

            </section>
        </form> 

            <List messages={messages} setMessages ={setMessages} /> 
      </>
 )
}
   
export default Main;