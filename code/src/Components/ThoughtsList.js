import React, { useEffect, useState } from 'react'
import { formatDistance } from 'date-fns'

const ThoughtsList = () => {
    const [thoughtsList, setThoughtsList] = useState ([])
    const [loading, setLoading] = useState (false)

    useEffect(() => {
        fetchThoughts()    
    }, [])

    const fetchThoughts = () => {
        setLoading(true)
        fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
        .then(res => res.json())
        .then(data => setThoughtsList(data))
        .catch(error => console.error(error))
        .finally(() => setLoading(false))

    }
        if (loading) {
            return <h1>Loading in progess...</h1>
        }

        return (
            <section className="message-container">
                {thoughtsList.map((singleThought) => (
                   <div className="card">
                   <div key = {singleThought._id}>
                      <h4 className="message-text">{singleThought.message}</h4>
                      
                      <input type="checkbox" checked={singleThought.isChecked} />
                      <p>{formatDistance(new Date(singleThought.createdAt), Date.now(), {addSuffix: true
            })}     </p>
            
                    </div>
                    </div>))}
            </section>
        )
}

export default ThoughtsList

