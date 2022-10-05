
import React from 'react';


const ThoughtsList =( { thought, thoughtslist, setThoughtsList } ) => {

    
    return (    
        <div className="wrapper">

                {thoughtslist.map(message => {
                
                return (
                <div className="Card">
                <div key ={message._id}>
                <p>{message.description}</p>
                
                <button className="heartbutton">❤️</button>
                </div>
                </div>
    
                )
                })} 
 
            </div>
    );
}

export default ThoughtsList;
