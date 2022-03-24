import React, { useEffect, useState } from "react";
import { formatDistance } from "date-fns";

export const ToughtList = ({ thoughtList, setThoughtList }) => {
    const [updateLikes, setUpdateLikes] = useState('')
        useEffect(() => {
        fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
            .then(res => res.json())
            .then(data => setThoughtList(data))
    })

    const onMeLike = (postId) => {
        const options = {
            method: 'POST',
            headers: { 'content-type': 'application/json', },
        }
        fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${postId}/like`, options)
            .then(res => res.json())
            .then((data) =>  setUpdateLikes ([data, updateLikes]))
        }
    

    return (
        <section>
            
            {thoughtList.map(singlePost => (
                <div className="post">
                <div key={singlePost._id}>
                    <h3>{singlePost.message}</h3>
                    <button onClick={() => onMeLike(singlePost._id)} >Me like</button>
                    <p className="numberOfLikes"><span role="img" aria-label="heart">❤️</span> x {singlePost.hearts}</p>
                    <p>Posted: {formatDistance(new Date (singlePost.createdAt), Date.now())}</p>
                </div>
                </div>
            ))}
            
        </section>
    )
}

export default ToughtList
