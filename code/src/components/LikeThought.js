import React from "react"

import { API_URL_LIKE } from "reusables/urls"

const LikeThought = () => {
  useEffect(() => {
    fetch(API_URL_LIKES)
      .then((res) => res.json())
      .then((data) => console.log(data))
  }, [setThoughts])
}

export default LikeThought
