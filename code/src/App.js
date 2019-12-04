import React, { useState, useEffect } from 'react'
import InputThoughts from 'Components/InputThoughts.js'
import ThoughtsList from 'Components/ThoughtsList.js'
import { getThoughts } from './smarts.js'

export const App = () => {

  const [thoughts, setThoughts] = useState([])
  const [reloadThoughts, setReloadThoughts] = useState(false)

  useEffect(() => {
    getThoughts(setThoughts) /* load thoughts */
  }, [reloadThoughts])

  return (
    <div>
      <main>
        <InputThoughts 
          setThoughts={setThoughts} 
        />
        <hr />
        <ThoughtsList 
          thoughts={thoughts}
          setReloadThoughts={setReloadThoughts}
        />
      </main>
      <footer>
        <div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/"     title="Flaticon">www.flaticon.com</a></div>
      </footer>
    </div>
  )
}
