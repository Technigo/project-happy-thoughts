import React, { useEffect, useState } from 'react'
import { HappyForm } from "./components/HappyForm"
import { HappyThoughts } from "./components/HappyThoughts"

const url = "https://happy-thoughts-technigo.herokuapp.com/thoughts"

export const App = () => {
  const [thoughts, setThoughts] = useState([])
  const [postedMessage, setPostedMessage] = useState("")
  return (
    <div>
      <HappyForm />
    </div>
  )
}
