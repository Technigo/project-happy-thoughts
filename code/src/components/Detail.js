import React, { useState, useEffect } from 'react'

export const Detail = (props) => {

  const [details, setDetails] = useState()

  useEffect(() => {
    fetch(props.url)
      .then(res => res.json())
      .then(json => {
        setDetails(json)
      })
  }, [props])

  return (
    <>
      <h1>{props.name}</h1>
      {details && <img src={details.sprites.front_default} alt="" />}
    </>
  )
}
