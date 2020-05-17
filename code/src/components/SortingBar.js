import React from 'react'
import { RadioButtons } from './RadioButtons'

const testArray = ['Likes', 'Newest', 'Oldest']

export const SortingBar = () => {
  return (
    <div className="sorting-container">
      <RadioButtons
        label="Sort:"
        id=""
        items={testArray}
        state=""
        setState="" />
    </div>
  )
}