import React from "react"

const RefreshBtn = ({ Refresh }) => {
  window.location.reload("Refresh")

  return (
    <button value="Refresh" onClick={Refresh}>Refresh</button>
  )
}

export default RefreshBtn