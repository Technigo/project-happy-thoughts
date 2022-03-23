import React from 'react'

// {useState, useEffect}

const Form = () => {
    // const [newMessage, setNewMessage] = useState('')



    // Assuming you have this kind of state in your component:
// const [thoughts, setThoughts] = useState([]) 

// Later, in your code which handles the form submission, you 
// could have something which looks like this to send the new 
// message, get the response from the API, and then add it to 
// the thoughts array:
// const handleFormSubmit = (event) => {
//   event.preventDefault()

  // Send the POST request with the input from your form (instead
  // of 'Hello world' like this example does):
//   fetch('https://technigo-thoughts.herokuapp.com/', { 
//     method: 'POST', 
//     body: JSON.stringify({ message: 'Hello world' })
//   })
//     .then((res) => res.json())
//     .then((newThought) => {
      // Now you have `newThought` which is the response from the
      // API as documented at the top of this readme. You can use
      // it to update the `thoughts` array: 
//       setThoughts((previousThoughts) => [newThought, ...previousThoughts])
//     })
// }


return(

        <form id="form" action="https://happy-thoughts-technigo.herokuapp.com/thoughts" method="POST">
            <div className="input-group">
                <label>What's making you happy right now?
                    <input type="text" name="text" className="text-input"/>
                </label>
            </div>

            <div className="btn-group">
                <button className="send-button"> 
                    <span role="img" aria-label="heart emoji">❤️</span>Send Happy Thought<span role="img" aria-label="heart emoji">❤️</span>
                </button>
            </div>
        </form>
)
}

export default Form