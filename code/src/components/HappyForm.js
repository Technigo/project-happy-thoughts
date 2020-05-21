import React, {useState} from 'react'
import 'components/design/messageform.css'


const thoughts_URL = "https://ebbabw-project-happy-thoughts.herokuapp.com/thoughts"

export const HappyForm = props => {
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault()

        fetch(thoughts_URL, {

            method: "POST",
            body: JSON.stringify({ message: HappyForm }),
            headers: { 'Content-Type': 'application/json'}
        })
        .then(() => {
            props.handleFromSubmit(message)
            setMessage('')

        })
       .catch(err => console.log('error:', err))
    
    };


return (
    
    <article className="messageSubmitbox">
    <h3>What's making you happy right now?</h3>
        <textarea
        row='3'
        value={message}
        placeholder="Write 5 or more character"
        onChange={event => setMessage(event.target.value)}>
        </textarea>

        
        <button
        type="submit"
        onClick={handleSubmit}
        className="messageSubmitbutton"
        disabled={message.length < 5 || message.length > 140}
        > 
        <span role="img" aria-label="party">🎉 </span>Send happy thought<span role="img" aria-label="party"> 🎉</span>
        </button> 
        <p className="number-character">{message.length} / 140</p>

    </article>
)

}