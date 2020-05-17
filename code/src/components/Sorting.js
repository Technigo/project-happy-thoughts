import React from 'react'
import { RadioButtons } from './RadioButtons'

const testArray = ['newest', 'oldest', 'likes']

export const Sorting = ({ state, setState }) => {
  return (
    <div className="sorting-container">
      <RadioButtons
        label="Sort:"
        items={testArray}
        state={state}
        setState={setState} />
    </div>
  )
}