import React, { useEffect, useState } from 'react'
import { formatDistance } from 'date-fns'

const ThoughtList = () => {

    const [thoughtList, setThoughtList] = useState([])
    const [loading, setLoading] = useState(false)
    //  const [newThought, setNewThought] = useState('')

    useEffect(() => {
        fetchThoughts()

        // return () => {
        //     console.log('I will be unmounted!')
        // }
    }, [])

    const fetchThoughts = () => {
            setLoading(true);
            fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
                .then(res => res.json())
                .then(data => setThoughtList(data))
                .catch(error => console.error(error))
                .finally(() => setLoading(false));
    }

    if (loading) {
        return <h1>Loading in progress...</h1>
    }


    return (

        <section>
            {thoughtList.map(singleThought => (
                <article key={singleThought._id}>
                    <h4>{singleThought.message}</h4>
                    <p>{formatDistance(new Date(singleThought.createdAt), Date.now(), {
                        addSuffix: true,
                    })}
                    </p>
                </article>
            ))}
        </section>
    )

}

export default ThoughtList