import React, {useState, useEffect} from "react";
import SendMessage from "./SendMessage";
import Message from "./Message";

const HomePage = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [happyThoughts, setHappyThoughts] = useState([])
    const [messageSent, setMessageSent] = useState(false)
    const [messageLiked, setMessageLiked] = useState(false)

    const HAPPY_API = 'https://happy-thoughts-technigo.herokuapp.com/thoughts'

    useEffect(() => {
        if (isLoading === true || messageSent === true || messageLiked === true) {
            getThoughts();
        }

        const interval=setInterval(()=>{
            getThoughts()
           },10000)
            
           return()=>clearInterval(interval)
        
    }, [messageSent, isLoading, messageLiked])

    const getThoughts = async () => {
        setIsLoading(true)
        const response = await fetch(HAPPY_API)
        const data = await response.json()
        setHappyThoughts(data)
        setIsLoading(false)
        setMessageSent(false)
        setMessageLiked(false)
    }

    return (
        <>
        <SendMessage 
            messageSent={messageSent}
            setMessageSent={setMessageSent}
        />
        {/* {isLoading && <p>Data is loading...</p>} */}
        {happyThoughts.map((thought) => (
            <Message 
            key={thought._id} 
            thought={thought} 
            messageLiked={messageLiked}
            setMessageLiked={setMessageLiked}
            />
        ))}
        </>
    )
}

export default HomePage