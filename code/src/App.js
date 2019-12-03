import React, { useState } from 'react'
import InputThoughts from 'Components/InputThoughts.js'
import ThoughtsList from 'Components/ThoughtsList.js'
import { getThoughts } from './smarts.js'

export const App = () => {

  const [thoughts, setThoughts] = useState([])
  
  getThoughts(setThoughts) /* load thoughts */

  return (
    <div>
      <main>
        <InputThoughts 
          setThoughts={setThoughts} 
        />
        <hr />
        <ThoughtsList 
          thoughts={thoughts}
        />
      </main>
      <footer>
        <div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/"     title="Flaticon">www.flaticon.com</a></div>
      </footer>
    </div>
  )
}
