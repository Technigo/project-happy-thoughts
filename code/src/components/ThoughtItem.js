import React from "react";
import { Likes } from "./Likes";

export const ThoughtItem = ({thought, fetchThoughts}) => {

    return(
            <div className="thoughtContainer">
              <div className="messageContainer">
                <p className="message">{thought.message}</p>
              </div>
              <Likes 
                hearts={thought.hearts} 
                id={thought._id} 
                date={thought.createdAt}
                fetchThoughts={fetchThoughts}
                />
            </div>
    )
}
