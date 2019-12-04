import React, { useState, useEffect } from 'react';
import './App.css'



export const App = () => {
  const [thoughts, setThoughts] = useState([])
  const [messages, setMessages] = useState('')
  // const [submitted, setSubmitted] = useState(false)
  const [text, setText] = useState([])
  const [heart, setHeart] = useState()
  //relode thoughts, setreloadThoughts//


  useEffect(() => {
    fetch('https://technigo-thoughts.herokuapp.com')
      .then(res => res.json())
      .then(json => setThoughts(json))
    // .then(json => console.log(json))


  })

  const handleFormSubmit = () => {
    // submit and update thoughts
    // fetch to submit thought
  }

  const handleHeartClick = () => {
  }

  return (
    <div>

      <form onSubmit={event => event.preventDefault()}>
        <div className="headForm">
          <p>What's making you happy right now?</p>

          <textarea className="form-text">

            {/* min/maxlength charachters to be added  */}
          </textarea>

          {/*           
          onChange={(event) => setText(event.target.value)}}
          {/* value={text}> /> */}

          <button onClick={handleFormSubmit}>❤️ Send happy thought ❤️</button>
        </div>
      </form>


      <section>
        <ul>
          {thoughts.map(thought => (
            <li key-id={thought.message} className="messages">
              <div> {thought.message} </div>

              <div className="likes"><button onClick={handleHeartClick}>❤️</button>{thought.hearts}</div>

            </li>
          ))}

        </ul>
      </section>
    </div >

  )
}

/******ALT ****/
// import React, { useState, useEffect } from "react"
// import { HappyThought } from "./components/HappyThought"
// import { HappyForm } from "./components/HappyForm"

// export const App = () => {
//   const [thoughts, setThoughts] = useState([])
//   const [postedMessage, setPostedMessage] = useState("")

  // useEffect(() => {
  //   fetch("https://technigo-thoughts.herokuapp.com/")
  //     .then(res => res.json())
  //     .then(json => setThoughts(json))
  //     }, [postedMessage])
//  
//    const handleFormSubmit = message => {
//     fetch("https://technigo-thoughts.herokuapp.com/", {
//     method: "POST",
//     body: JSON.stringify({ message }),
//     headers: { "Content-Type": "application/json" }
//      })
//     .then(() => setPostMessage(message))
//     .catch(err => console.log("error:", err))
//     }


//   return (
//     <div>
//       <HappyForm onFormSubmit={handleFormSubmit}/>
//       {thoughts.map(thought => (
//         <HappyThought key={thought._id} thought={thought} />
//       ))}
//     </div>
//   )
// }
