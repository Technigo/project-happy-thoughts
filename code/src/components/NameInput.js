import React from 'react'

const NameInput = ({ userName, setUserName }) => {

  const handleNewName = (event) => {
    setUserName(event.target.value)
  }

  return (
    <div className="name-input-wrapper">
      <label 
        className="name-input-label" 
        htmlFor="name"
      >
        Name
      </label>
      <input 
        id="name" 
        className="name-input" 
        type="text" 
        value={userName} 
        onChange={handleNewName}
      />
    </div> 
  )
}

export default NameInput