import React from "react"

import { ThoughtsList } from "./components/ThoughtsList";
import { ThoughtsInput } from "./components/ThoughtsInput";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <div>
      <ThoughtsInput/>
      <ThoughtsList/>
      <Footer/>
    </div>
  )
}
