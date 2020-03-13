import React, {useState} from "react"
import 'happyForm.css'

export const HappyForm = ({onFormSubmit}) => {

    const [message, setMessage] = useState("")

    const handleSubmit = event => {
        event.preventDefault()
        onFormSubmit(message)
        setMessage("")
    }

    return (
        <form
        onKeyPress={(e) => {
            if (e.key === 'Enter') { onFormSubmit(message) }
          }}>
            <h3>Post a happy thought!</h3>
            <textarea
            rows="3" 
            onChange={event => setMessage(event.target.value)}></textarea>
            {message.length} / 140
            <button type="submit" onClick={handleSubmit} disabled={message.length < 5 || message.length > 140 ? true : false}>
                <span role="img" aria-label="Send your thought">❤️ Send your happy thought ❤️</span>
            </button>
        </form>
    )
}