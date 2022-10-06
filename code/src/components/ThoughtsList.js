import React from 'react';


const ThoughtsList =( { list } ) => {

    
    return (    
        <div className="wrapper">
            
                {list.map(happyThought => {
                
                return (
   
                <div key ={happyThought._id}>
                <p>{happyThought.message}</p>
                <p>{happyThought.createdAt}</p>
                <button className="heartbutton">❤️</button>
                <p>{happyThought.__v}</p>
                </div>
       
    
                )
                })} 
 
            </div>
    );
}

export default ThoughtsList;
