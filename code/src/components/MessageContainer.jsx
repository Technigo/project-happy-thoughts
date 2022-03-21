import React, {useState, useEffect} from "react";
import SendMessage from "./SendMessage";
import Message from "./Message";

const MessageContainer = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [happyThoughts, setHappyThoughts] = useState([])

    const HAPPY_API = 'https://happy-thoughts-technigo.herokuapp.com/thoughts'

    useEffect(() => {
        getThoughts();
    }, [])

    const getThoughts = async () => {
        setIsLoading(true)
        const response = await fetch(HAPPY_API)
        const data = await response.json()
        setHappyThoughts(data)
        setIsLoading(false)
    }

    return (
        <>
        <SendMessage />
        {isLoading && <p>Data is loading...</p>}
        {happyThoughts.map((thought) => (
            <Message key={thought._id} thought={thought} />
        ))}
        </>
    )
}

export default MessageContainer