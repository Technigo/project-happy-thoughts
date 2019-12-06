import React, {useState, useEffect} from "react"
import 'HappyForm.css'

export const HappyForm = ({onFormSubmit}) => {

    const [message, setMessage] = useState("")

    const handleSubmit = event => {
        event.preventDefault()
        onFormSubmit(message)
    }
    return (
        <form>
            <h3>Post a happy thought!</h3>
            <textarea rows="3" onChange={event => setMessage(event.target.value)}></textarea>
            {message.length} / 140
            <button type="submit" onClick={handleSubmit} disabled={message.length < 5 || message.length > 140 ? true : false}>
                ❤️ Send your happy thought ❤️
            </button>
        </form>
    )
}