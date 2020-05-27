import React, { useState, useEffect, setState } from 'react'
import styled from 'styled-components'
import { Cards, count } from 'components/Cards'
import { NewThought } from 'components/NewThought'

export const Container = styled.div`
  width: 90%;
  margin: 0px auto;

  @media (min-width: 576px){
    width: 500px;
  }
`

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

  return (
    <Container>
      <NewThought thoughts={thoughts} setThoughts={setThoughts} />
      <section>
        {thoughts.slice(0, 5).map((thought) => {
          return (
            <Cards info={thought} />

          )
        })}
      </section>
    </Container>
  )
}
