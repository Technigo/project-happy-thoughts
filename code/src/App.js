import React, { useState, useEffect } from "react";





export const App = () => {

  const [thoughts, setThoughts] = useState([]);


  useEffect(() => {
    fetch("https://technigo-thoughts.herokuapp.com/", {
      method: "POST",
      body: JSON.stringify({ message: "my happy thought" })

    })
      .then(res => res.json())
      .then(json => console.log(json));
  }, []);



  return (

    <div>
      <h3>my happy thought</h3>
    </div>
  )


}
