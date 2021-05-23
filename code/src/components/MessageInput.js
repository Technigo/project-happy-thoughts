import React, { useRef } from 'react'

import { Picker } from "emoji-mart"

import TextArea from './TextArea'

const MessageInput = ({ messageNew, setMessageNew, setChars, showPicker, setShowPicker }) => {
  
  
  const handleNewMessage = (event) => {
    setMessageNew(event.target.value)
    setChars(event.target.value.length)
  }

  return (
    <>
      <div className="textarea-wrapper">
        <TextArea
          messageNew={messageNew}
          showPicker={showPicker}
          setShowPicker={setShowPicker}
          handleNewMessage={handleNewMessage}
        />
      </div>
      {showPicker && window.innerWidth >= 768 && (
        <div className="picker-wrapper">
          <Picker 
            title='pick emoji!'
            emoji='point_up'
            native={true}
            perLine={7}
            style={{}}
            onSelect={emoji => setMessageNew(messageNew + emoji.native)}
          />
        </div>
      )}
    </>
  )
}

export default MessageInput