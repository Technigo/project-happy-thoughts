import React, { useState, useEffect } from "react"


export const HeartButton = (props) => {

    const [like, setLike] = useState(false)
    const [thoughts, setThoughts] = useState([])

    const handleFormSubmit = (event) => {
        event.preventDefault()

        fetch(`https://technigo-thoughts.herokuapp.com/${props.id}/like`, {
            method: 'POST',
        })
            .then((res) => res.json())
            .then((newLike) => { setLike(true) })
            .catch(error => console.error(error))
    }
    return (
        <form onSubmit={handleFormSubmit}>
            <button className="heart-btn">
                ❤️
            </button>
        </form>

    )
}
