import React, { useState, useEffect } from 'react'


const Hearts = ({ hearts, id }) => {
  const [hearts, setHearts] = useState(hearts)


  if (!localStorage[id]) {
    localStorage.setItem(id, 0)
  }

  const likeClickHandler = () => {
    fetch(`https://technigo-thoughts.herokuapp.com/${id}/like`, { method: 'POST' })
    setHearts(hearts + 1)
    localStorage[id] = Number(localStorage[id]) + 1
  }

  return (
    <section className="heart-section">
      <button type="button" className={(hearts > 0 ? 'hearted' : 'nothearted')} onClick={likeClickHandler}>
        <i className="" aria-hidden="true" />
      </button>
      <p>x{hearts} - {localStorage[id]} yours</p>
    </section>
  )
}


export default Hearts