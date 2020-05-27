import React, {useState} from 'react'
import styled from 'styled-components'
import {Title, Paragraf} from '../shared/shared'

const Form = styled.form`
  border: 1px solid black;
  background-color: lightgray;
  box-shadow: 3px 3px 3px black;
  padding: 1em;
  width: 90%;
  margin: 1em auto;
  display: flex;
  flex-direction: column;
  
  & input {
    width: 90%;
    margin: 1em auto;
    height: 2.5em;
  }
`
const Button = styled.button`
  display: inline;
  padding: 5px 10px;
  width: auto;
  max-width: 50%;
  background-color: lightcoral;
  border-radius: 15px;
 

  & span {
    color: red;
    font-size: 1.3em;
  }
`


export const NewThought = ({ thoughts, setThoughts }) => {
    const [myThought, setMyThought] = useState("")

    const handleFormSubmit = (event) => {
    event.preventDefault()
    console.log(myThought)
    // Send the POST request with the input from your form.

    fetch("https://aqveduktis-happy-thought.herokuapp.com/", {
      method: 'POST',
      body: JSON.stringify({ message: myThought }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((newThought) => {
        console.log("new thought", newThought)
        // Now you have `newThought` which is the response from the
        // API as documented at the top of this readme. You can use
        // it to update the `thoughts` array: 
        setThoughts((previousThoughts) => [newThought, ...previousThoughts])
        // Vansway setState((state) => ({ thoughts: [newThought, ...state.thoughts] }))
        console.log("important", thoughts)
        setMyThought("")

      })
  }

  return(
    <Form onSubmit={handleFormSubmit}>
      <label>
        <Title>What's making you happy right now?</Title>
        <input type="text"
            value = {myThought}
            onChange={e => setMyThought(e.target.value)}
            required
        />
      </label>
      <Button type="submit" disabled={(myThought.length < 5 || myThought.length > 140)}><span>&#9829;</span> Send Happy Thought <span>&#9829;</span></Button>
      <Paragraf inputColor="black">{myThought.length} / 140</Paragraf>
    </Form>
  )
}