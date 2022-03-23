import React, { useState, useEffect } from 'react'

export const ThoughtsList = () => {
  const [list, setList] = useState([])
  const [loading,setLoading] = useState(false)

    useEffect(() => {
        fetchList()
    }, [])
     const fetchList = () => {
        setLoading(true)
        fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
        .then(res => res.json())
        .then(data => setList(data))
        .catch(error => console.error(error))
        .finally(() => setLoading(false))
        }
        if (loading) {
            return <h1>Loading in progress....</h1>
        }
    return (
        <section>
           {list.map(thoughts => (
               < div key={thoughts._id}>
                   <h4>{thoughts.message}</h4>
                   <p>{thoughts.createdAt}</p>
                   </div>
           ))}
        </section>
    )
}




{/*export const ThoughtsList = (messages) => {
    const [message, setMessage] = useState ([])

    useEffect (() => {
        fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
        .then(res => {return res.json()})
        .then(data => {
            setMessage(data)
    })
}, []); 

return (
    <div>
        {message.map(messages => {
                <div key={messages._id}>
                    <p>{messages.message}</p>
                </div>
        })}
        {messages}

    </div>
)

}*/}
