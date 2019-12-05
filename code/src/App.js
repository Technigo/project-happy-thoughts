import React, { useState, useEffect } from 'react';
import { HappyThoughts } from "./components/HappyThoughts";
import { Form } from "./components/Form";
import './app.css'

export const App = () => {
  const [thoughts, setThoughts] = useState([])
  const [postedMessage, setPostedMessage] = useState("")


  useEffect(() => {
    fetch("https://technigo-thoughts.herokuapp.com/")
      .then(res => res.json())
      .then(json => setThoughts(json))
  }, [postedMessage])

  const handleFormSubmit = (message) => {
    fetch('https://technigo-thoughts.herokuapp.com/', {
      method: 'POST',
      body: JSON.stringify({ message }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(() => setPostedMessage(message))
      .catch(err => console.log("error:", err))
  }


  //UseEffect: if we dont say to it what to listen to and when to change/update it 
  //will change everytime the state is changing and will create an infinity loop.
  //With an empty array it will only fetch once when the component did mount. If we add somehthing in the array/dpencies[] it will do the fetch when that changes.
  // Tid 55 minuter

  return (
    <div className="app">
      <Form onFormSubmit={handleFormSubmit} />
      {thoughts.map(thought => (
        <HappyThoughts key={thought._id} thought={thought} />
      ))}

      <footer>Technigo Bootcamp 2019 © Linda Isell</footer>

    </div>
  )
}




// export const App = () => {
//   const [thoughts, setThoughts] = useState([])
//   const [newThought, setNewThought] = useState("")

//   useEffect(() => {
//     fetch("https://technigo-thoughts.herokuapp.com/")
//       .then(res => res.json())
//       .then(json => setThoughts(json))
//   }, [])

//   const handleFormSubmit = (event) => {
//     event.preventDefault()
//     fetch('https://technigo-thoughts.herokuapp.com/', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ message: newThought })
//     })
//       .then((res) => res.json())
//       .then((newThought) => {
//         setThoughts((previousThoughts) => [newThought, ...previousThoughts])
//       })
//   }


//   return (
//     <div className="app">
//       <div className="cards">
//         <form className="thought-input" onSubmit={handleFormSubmit}>
//           <p>What is making you happy right now?</p>
//           <label>
//             <input
//               type="text"
//               autoFocus
//               placeholder="Type your thought here..."
//               onChange={event => setNewThought(event.target.value)}
//               value={newThought}
//             />
//             <div className="buttom-input-card">
//               <button className="send-button"><span role="img" aria-label="heart">❤️ </span>
//                 Send Happy Thought
//             <span role="img" aria-label="heart">❤️ </span></button>
//               <p className={((newThought.length < 5 || newThought.length >= 140) ? 'wrongLength' : 'goodLength')}>{newThought.length}/140</p>
//             </div>
//           </label>
//         </form>
//       </div>

//       <div className="cards">
//         {thoughts.map(thought => (
//           <div className="inside-cards">
//             <p key={thought.id}>{thought.message}</p>
//             <ul>
//               <Heart hearts={thought.hearts} />
//               <span className="time">
//                 <Timestamp date={thought.createdAt} />
//               </span>
//             </ul>
//           </div>
//         ))
//         }
//       </div>

//       <footer>Technigo Bootcamp 2019 © Linda Isell</footer>

//     </div>

//   )
// }

