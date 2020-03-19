import React from "react";

export const Cards = ({ thoughts, setThoughts }) => {
  return (
<section>
{thoughts.map((thought)=>{
          return(<p key= {thought.message}>{thought.message}</p>)
        })}
</section>
  );
};