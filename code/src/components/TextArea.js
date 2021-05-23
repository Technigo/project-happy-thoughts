import React, { useRef } from 'react'

import TogglePicker from './TogglePicker'

const TextArea = ({ messageNew, showPicker, setShowPicker, handleNewMessage }) => {
  const ref = useRef(null)
  
  return (
    <>
      <label 
        className="post-message-label" 
        htmlFor="newMessage"
      >
        What's making you happy right now?
      </label>
      <textarea 
        className="post-message-textarea" 
        id="newMessage"
        placeholder="Write your happy thought.."
        value={messageNew}
        ref={ref}
        onChange={handleNewMessage}
      />
      {window.innerWidth >= 768 && (
        <TogglePicker
          showPicker={showPicker}
          setShowPicker={setShowPicker}
        />
      )}
    </>
  )
}

export default TextArea