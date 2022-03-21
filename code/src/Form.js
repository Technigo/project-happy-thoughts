import React, {useState, useEffect} from 'react'

const Form = () => {
    const [newMessage, setNewMessage] = useState('')


return(

    <div className="container">
        <form>
            <label>What's making you happy right now?
                <input type="text"/>
            </label>
        </form>
    </div>
)
}

export default Form