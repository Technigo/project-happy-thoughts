import React from 'react'

const ApiInput = ({ ApiThougth/* , SetApiThougth */ }) => {
  return (
    <div className="test">
      {ApiThougth.map((thougth) => (
        <p key={thougth.id} className="container-child">{thougth.message}
          <button type="button" className="btn">heart</button>
          {thougth.hearts}
          {thougth.createdAt}
        </p>
      ))}
    </div>
  )
}
export default ApiInput