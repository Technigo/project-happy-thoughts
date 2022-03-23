import React from 'react'

const ThoughtForm = ({newThought, handleNewThought, handleFormSubmit}) => {
    // const [newThought, setNewThought] = useState ('')

    // const handleNewThought = (event) => {
    //     setNewThought(event.target.value)
    // }
    // const handleFormSubmit = (event) => {
    //     event.preventDefault()

    //     const options = {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             message: newThought
    //         })
    //     }

    //     fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts', options)
    //         .then(res =>res.json())
    //         .then(data => console.log(data))
    //         .finally(() => setNewThought(''))
    // }

    return (
        <form onSubmit={handleFormSubmit}>
            <h2>What's making you happy right now?</h2>
            <textarea value={newThought} onChange={handleNewThought} />
            <button
              type='submit'
              disabled={newThought.length < 5 || newThought.length > 141}
            >
            <span role='img' aria-label='heart emoji'>❤️</span>Send Happy Thought<span role='img' aria-label='heart emoji'>❤️</span></button>
        </form>
    )

}


export default ThoughtForm
