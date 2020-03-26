import React, {useState} from 'react'
import 'components/design/messageform.css'


export const HappyForm = () => {

    const thoughts_URL = "https://technigo-thoughts.herokuapp.com/"
    const [message, setMessage] = useState("");

    const handleSubmit = event => {
        event.preventDefault()

        fetch(thoughts_URL, {

            method: "POST",
            Header: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({message})
        }
      ).then(()=> {
          window.location.reload();
      });

    };


return (
    
    <article className="messageSubmitbox">
    <h3>What's making you happy right now?</h3>
    <form onSubmit={handleSubmit}>
        <textarea
        type="text"
        placeholder="Write something happy"
        onChange={event => setMessage(event.target.value)}>
        </textarea>
        <button
        type="submit"
        className="messageSubmitbutton"
        value="Add Message">
        Send happy thought</button>
    </form>
    </article>
)

}