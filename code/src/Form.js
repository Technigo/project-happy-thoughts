import React, { useState, useEffect } from 'react'
import { Fetch } from './Fetch'


export const Form = () => {

  return (
    <section className="form-section">
    <form>
      <label>
        What's making you happy right now?
      <input
          type="text"
          name="thought"
          id="thought"
          value="write your thought here...">
        </input>
      </label>
      <button type='submit'>Send a happy thought</button>
    </form>
    </section>
  )
}