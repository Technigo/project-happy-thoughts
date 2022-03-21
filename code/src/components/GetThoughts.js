import React, { useState, useEffect } from "react"

const FetchAPI = () => {
  const [postedThougts, setpostedThougts] = useState([])
  useEffect(() => {
    fetch("https://happy-thoughts-technigo.herokuapp.com/thoughts")
      .then((response) => response.json())
      .then((json) => setpostedThougts(json))
  }, [])

  return (
    <>
      {postedThougts.map((data) => (
        <div key={data._id}>
          <p>Message: {data.message}</p>
          <p>Likes: {data.hearts}</p>
          <p>Created: {data.createdAt}</p>
        </div>
      ))}
      <p>testar 123</p>
    </>
  )
}

export default FetchAPI
