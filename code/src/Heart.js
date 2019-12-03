import React, { useState, useEffect } from "react";

export const Heart = () => {
  const [heartLike, setHeartLike] = useState([]);

  useEffect(() => {
    fetch("https://technigo-thoughts.herokuapp.com/THOUGHT_ID/like", {
      method: "POST"
    })
      .then(res => res.json())
      .then(json => {
        console.log("json", json);
        setHeartLike(json);
      });
  }, []);

  return (
    <div>
      {heartLike.map(hearts => (
        <div>
          <div key={hearts._id}>{hearts._id}</div>
        </div>
      ))}
    </div>
  );
};
