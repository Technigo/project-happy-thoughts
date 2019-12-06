import React, { useEffect, useState } from "react"
import { HappyThought } from "./components/HappyThought"
import { HappyForm } from "./components/HappyForm"


export const App = () => {
  const [thoughts, setThoughts] = useState([])
  const [postedMessage, setPostedMessage] = useState("")
  // const [likes, setLikes] = useState()

  //   const [heart, setHeart] = useState()
  //   relode thoughts, setreloadThoughts//

  useEffect(() => {
    fetch("https://technigo-thoughts.herokuapp.com/")
      .then(res => res.json())
      .then(json => setThoughts(json))
  }, [postedMessage])


  const handleFormSubmit = message => {
    fetch("https://technigo-thoughts.herokuapp.com/", {
      method: "POST",
      body: JSON.stringify({ message }),
      headers: { "Content-Type": "application/json" }
    })
      .then(() => setPostedMessage(message))
      .catch(err => console.log("error:", err))
  }

  // const onThoughtLiked = likedThoughtId => {
  //   const updatedThoughts = thoughts.map(thought => {
  //     if (thought._id === likedThoughtId) {
  //       thought.hearts += 1;
  //     }
  //     return thought;
  //   });
  //   setThoughts(updatedThoughts);
  // };


  return (
    <div>
      <HappyForm onFormSubmit={handleFormSubmit} />
      {thoughts.map(thought => (
        <HappyThought key={thought._id} thought={thought} />
      ))}
    </div>
  )
}


//   return (
//     <div>
//       {thoughts.map(thought => (
//         <Thought
//           key={thought._id}
//           thought={thought}
//           onThoughtLiked={onThoughtLiked}
//         />
//       ))}
//     </div>
//   )
// }