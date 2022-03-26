import React from "react";
import { Likes } from "./Likes";

export const ThoughtItem = ({thought}) => {
  console.log('thought:', thought.message);
    return(
            <div className="thoughtContainer">
              <p>{thought.message}</p>
              <Likes 
                hearts={thought.hearts} 
                id={thought._id} 
                date={thought.createdAt}/>
            </div>
    )
}
