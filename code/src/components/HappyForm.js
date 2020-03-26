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
            body: JSON.stringify({ text: message})
        }
      ).then(()=> {
          window.location.reload();

      });

    };


return (
    <form onSubmit={handleSubmit}>
        <input
        type="text"
        className="form-text"
        onChange={event => setMessage(event.target.value)}>
        </input>
        <input
        type="submit"
        className="form-button"
        value="Add Message">
        </input>
    </form>
)

}
