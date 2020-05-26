import React, { useState, useEffect, setState } from 'react'
import { MyThought } from 'components/MyThought'
import { Cards, count } from 'components/Cards'
import { NewThought } from 'components/NewThought'

export const App = () => {
  const [thoughts, setThoughts] = useState([])


  // send the new message, get the
  // response from the API, and then add it to 
  // the thoughts array:
  useEffect(() => {
    fetch("https://aqveduktis-happy-thought.herokuapp.com/")
      .then(res => res.json())
      .then(json => {
        setThoughts(json)
        console.log("thoughts", thoughts)
      });
  }, [])


  // const handleFormSubmit = (event) => {
  //   event.preventDefault()
  //   console.log(myThought)
  //   // Send the POST request with the input from your form.

  //   fetch("https://aqveduktis-happy-thought.herokuapp.com/", {
  //     method: 'POST',
  //     body: JSON.stringify({ message: myThought }),
  //     headers: { 'Content-Type': 'application/json' },
  //   })
  //     .then((res) => res.json())
  //     .then((newThought) => {
  //       console.log("new thought", newThought)
  //       // Now you have `newThought` which is the response from the
  //       // API as documented at the top of this readme. You can use
  //       // it to update the `thoughts` array: 
  //       setThoughts((previousThoughts) => [newThought, ...previousThoughts])
  //       // Vansway setState((state) => ({ thoughts: [newThought, ...state.thoughts] }))
  //       console.log("important", thoughts)
  //       setMyThought("")

  //     })
  // }

  return (
    <div className="app">
      <NewThought thoughts={thoughts} setThoughts={setThoughts} />
      <section>
        {thoughts.slice(0, 5).map((thought) => {
          return (
            <Cards info={thought} />

          )
        })}
      </section>
    </div>
  )
}
