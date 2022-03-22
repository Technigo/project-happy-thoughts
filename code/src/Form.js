import React, {useState, useEffect} from 'react'

const Form = () => {
    const [newMessage, setNewMessage] = useState('')


return(

    <div className="container">
        <form id="form" action="https://happy-thoughts-technigo.herokuapp.com/thoughts" method="POST">
            <label>What's making you happy right now?
                <input type="text" name="text" className="text-input"/>
            </label>
            <button className="send-button">Send Happy Thought</button>
        </form>
    </div>
)
}

export default Form