import React  from "react";

import moment from "moment";


const HappyThougthList  =  ( props ) => { 
    const { message, hearts, _id,} = props.thought
    
    const handleClick = () => {
        fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${_id}/like` , {
            method: "POST",
            headers:
            {"Content-Type":"application/json"},
            body:"",
            }).then(() => props.onLiked(_id)) 
        }
       return(
            <>
                <div className="previous-messages"> 
                    {message}   
                    <p>

                    <button className ="heart-button"
                    onClick={handleClick}
                    style={{background: hearts > 0 ? "#d9fcc2" : "#f3f1f1" }}
                    >
                        <span role="img" aria-label="Heart">
                            {" ❤️"} 
                        </span>
                        </button>
                        x {hearts}
                    </p>

                    <span className ="message-time">
                    {moment(message.createdAt).fromNow()}; 
                    </span>
                </div>
                )
                </>
            );  
           } 
            
            
export default HappyThougthList; 

//{message.message}



////<section className ="list">
//{message.map((message) =>  {
 //                return(   
     //  </section>  
//   )};

