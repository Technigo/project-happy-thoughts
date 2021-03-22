/** Component structure:
 * App
 * |--- Thought
 *      |--- Content
 *            |--- Button (type="button")
 * |--- Form
 *      |--- Button (type="submit")
 *
 *
 */
import React from 'react'

export const App = () => {
  // States: thoughts
  // EFFECT: on mount (only empty state) => fetch the latest thoughts => set thoughts state
  // render 2 components (Thoughts and Form)
  // Thoughts.js renders only thoughts state (should be updated when thoughts state change)
  // Form.js onSubmit => setToughts((..otherthoughts) => ...new, otherthoughts )
  // since the thoughts state changed the THoughts.js should have updated
  // EFFECT: onchange thoughts => (i.e. a new Thought is added) POST new Thought

  return (
    <div>
      Find me in src/app.js!
    </div>
  )
}
