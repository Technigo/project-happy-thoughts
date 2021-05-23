import React from 'react'

const TogglePicker = ({ showPicker, setShowPicker }) => {

  const handleTogglePicker = (event) => {
    event.preventDefault()
    setShowPicker(!showPicker)
  }

  return (
    <button 
      className="emoji-btn" 
      onClick={handleTogglePicker}
    >
      {!showPicker ? '🤩' : '😎'} 
    </button>
  )
}

export default TogglePicker