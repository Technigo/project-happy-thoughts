import React, { useState } from "react";


const HappyForm = ({ onMessageChange }) => {
    const [message , setMessage] = useState ('');

    const MESSAGES_URL ="https://happy-thoughts-technigo.herokuapp.com/thoughts";

    const handleFormSubmit = (event) => {
    event.preventDefault(); 
    onMessageChange(setMessage);
    console.log(JSON.stringify({text: message})) 

     fetch(MESSAGES_URL, {
        method: "POST",
        headers:
        {"Content-Type":"application/json"},
        body:JSON.stringify({message: message})
        }
        ).then(() => {
            window.location.reload();
        })
        .catch(err => console.log("error:", err))
        
    };

    return (
    <>
        <form onSubmit = {handleFormSubmit}>
            <section className ="form-conatiner">

                <h1>What's making you happy right now?</h1>

                <textarea 
                rows="5"
                value={message} 
                onChange = {(event) => setMessage(event.target.value)}
                ></textarea>  

                <div className ="send-happy">

                <button 
                className ="form-button"
                type="submit" 
                disabled={message.length < 6 || message.length > 140 ? true : false}
                style ={{background: message.length < 6 ||message.length > 140 ? "#f3f1f1" : "#d9fcc2" }}>    

                <span className="green-heart" 
                role="img" 
                aria-label="Heart">
                {" 💚 "}
                </span>

                Send Happy Thougth

                <span className="green-heart"
                role="img"
                aria-label="Heart">
                {" 💚 "}
                </span>
                </button>

                <p className="thoughts-length-left"> {message.length} / 140 </p>

                </div> 
            </section>
        </form> 
    </>
 )
}
   
export default HappyForm;

