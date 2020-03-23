import React, {useState, useEffect} from'react'

export const Detail = (props) => {
  const [details, setDetails] =useState()

  useEffect(() => {
    fetch(props.hearts)
    .then(res => res.json())
    .then (json => {
      setDetails(json)
    })
  },[props])

  return (
    <div>
      <h1>{props.message}</h1>
      {details && <img src="./heart.png" alt="" />}
      </div>
  )
}
