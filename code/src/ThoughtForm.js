import React, {useState} from "react"

export const ThoughtForm = ({thoughtsUrl}) => {
    const [myThought, setMyThought] = useState("")

    const handleFormSubmit = (event) => {
        event.preventDefault()
        console.log(JSON.stringify({message: myThought}))
        console.log(myThought)

        fetch(thoughtsUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({message: myThought})
        })
        .then((res) => res.json())
        .then((newThought) => console.log(newThought))
    }

    return(
        <form onSubmit={handleFormSubmit}>
            <input 
                type="text"
                onChange={event => setMyThought(event.target.value)}
                >
            </input>
            <button type="submit">Submit thought</button>
        </form>
    )
}