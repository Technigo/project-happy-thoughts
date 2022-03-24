import React, { useEffect, useState } from "react";
import { formatDistance } from "date-fns";

const ToughtList = () => {
    const [thoughtList, setThoughtList] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetchList()
    }, [])

    const fetchList = () => {
        setLoading(true)
        fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
            .then(res => res.json())
            .then(data => setThoughtList(data))
            .catch(error => console.error(error))
            .finally(() => setLoading(false))
    }

    if (loading) {
        return <h2>Loading in progress...</h2>
    }

    return (
        <section>
            {thoughtList.map(singlePost => (
                <div key={singlePost._id}>
                    <h3>{singlePost.message}</h3>
                    <input type='text' />
                    <p>Posted: {formatDistance(new Date (singlePost.createdAt), Date.now())}</p>
                </div>
            ))}
        </section>
    )
}

export default ToughtList