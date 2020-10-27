import React, { useState, } from "react";

export const HandleFormSubmit = (event, input) => {
    const [thoughts, setThoughts] = useState([]); 
    
    event.preventDefault();
    console.log(input)

    // of 'Hello world' like this example does):
    // // // Send the POST request with the input from your form (instead
     fetch("https://happy-thoughts-technigo.herokuapp.com/thoughts", {
       method: "POST",
       body: JSON.stringify({ message: input }),
       headers: { "Content-Type": "application/json" }
     })
       .then((res) => res.json())
       .then((newThought) => {console.log(newThought)
         // Now you have `newThought` which is the response from the
         // API as documented at the top of this readme. You can use
         // it to update the `thoughts` array:
         setThoughts((previousThoughts) => [newThought, ...previousThoughts]);
         console.log(thoughts)
    });

    return <div>{thoughts.length}</div>
  };