import React, {useState, useEffect} from "react"
import 'HappyForm.css'

export const HappyForm = () => {

    const [message, setMessage] = useState("")

    const handleSubmit = event => {
        event.preventDefault()

        fetch("https://technigo-thoughts.herokuapp.com/", {
            method: "POST",
            body: JSON.stringify({ message }),
            headers: { "Content-Type": "application/json" }
        })
    }
    return (
        <form>
            <h3>Post a happy thought!</h3>
            <textarea rows="3" onChange={event => setMessage(event.target.value)}></textarea>
            <button type="submit" onClick={handleSubmit} disabled={message.length < 5 ? true : false}>
                ❤️ Send your happy thought ❤️
            </button>
        </form>
    )
}