import React from 'react'

const ErrorBoard = () => {
  return (
    <div className="error-board">
      <div className="api-error"> Oops, an error occured during API call!</div>
      <img className="sad-face" src="https://media.giphy.com/media/2hg8EPKHz7HLTXYm2i/giphy.gif" alt="Sad face"/>
    </div>
  )
}

export default ErrorBoard