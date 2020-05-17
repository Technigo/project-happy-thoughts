import React from 'react'

export const RadioButtons = ({ label, items, state, setState }) => {
  return (
    <>
      <p>{label}</p>

      {/* Render radio buttons from items(array) */}
      <div className="radio-btn-container">
        {items.map((item) => (

          <div key={item} className="radio-btn">
            <input
              type="radio"
              id={item}
              value={item}
              onChange={(event) => setState(event.target.value)}
              checked={state === item}
              required
              name="radioBtn" />
            <label htmlFor={item} className="radio-label">{item.charAt(0).toUpperCase() + item.slice(1)}</label>
          </div>

        ))}
      </div>

    </>
  )
}