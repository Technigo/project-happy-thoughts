import React from "react"

const RefreshButton = ({ Refresh }) => {
  window.location.reload("Refresh")

  return (
    <button value="Refresh" onClick={Refresh}>
      Refresh feed
    </button>
  )
}

export default RefreshButton
