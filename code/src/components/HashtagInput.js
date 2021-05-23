import React from 'react'

const HashtagInput = ({ hashtag, setHashtag }) => {

  const handleNewHashtag = (event) => {
    setHashtag(event.target.value)
  }

  return (
    <div className="hashtag-input-wrapper">
      <label 
        className="hashtag-input-label" 
        htmlFor="hashtag"
      >
        Hashtag
      </label>
      <input 
        id="hashtag"
        className="hashtag-input"
        type="text"
        value={hashtag}
        onChange={handleNewHashtag}
      />
    </div> 
  )
}

export default HashtagInput