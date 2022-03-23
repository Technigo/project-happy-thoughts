import React, {useState, useEffect} from "react";
import SendMessage from "./SendMessage";
import Message from "./Message";

const HomePage = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [happyThoughts, setHappyThoughts] = useState([])
    const [message, setMessage] = useState('')
    
    useEffect(() => {
        if (isLoading === true) {
            getThoughts();
        }

        const interval=setInterval(()=>{
            getThoughts()
           },10000)
            
        return()=>clearInterval(interval)
        
    }, [isLoading])

    // GETTING THOUGHTS
    const HAPPY_API = 'https://happy-thoughts-technigo.herokuapp.com/thoughts'
    const getThoughts = async () => {
        setIsLoading(true)
        const response = await fetch(HAPPY_API)
        const data = await response.json()
        setHappyThoughts(data)
        setIsLoading(false)
    }

    // SENDING A MESSAGE
    const SEND_API = 'https://happy-thoughts-technigo.herokuapp.com/thoughts'
    const sendMessage = () => {     
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: message })
        };

        fetch(SEND_API, options)
        .then(data => {
            if (!data.ok) {
                throw Error(data.status)
            }
            return data.json();
        }).then(update => {
            // console.log(update)
            document.getElementById('sendThought').value = ''
            getThoughts();
        }).catch(e => {
            // console.log(e)
        })
    }

    // LIKING A MESSAGE
    const sendLike = (messageID) => {
        const SEND_LIKE = `https://happy-thoughts-technigo.herokuapp.com/thoughts/${messageID}/like`

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({})
        };

        fetch(SEND_LIKE, options)
        .then(data => {
            if (!data.ok) {
                throw Error(data.status)
            }
            return data.json();
        }).then(update => {
            getThoughts();
            // console.log(update)
        }).catch(e => {
            // console.log(e)
        })
    }

    return (
        <>
        <SendMessage 
            setMessage={setMessage}
            sendMessage={sendMessage}
        />
        {/* {isLoading && <p>Data is loading...</p>} */}
        {happyThoughts.map((thought) => (
            <Message 
            key={thought._id} 
            thought={thought}
            sendLike={sendLike}
            />
        ))}
        </>
    )
}

export default HomePage
