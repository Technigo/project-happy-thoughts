import React from 'react'

const HashtagInput = ({ hashtag, setHashtag }) => {

  const handleNewHashtag = (event) => {
    setHashtag(event.target.value)
  }

  return (
    <>
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
    </> 
  )
}

export default HashtagInput