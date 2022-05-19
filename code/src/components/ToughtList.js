import React, { useEffect, useState } from "react";
import { formatDistance } from "date-fns";

//useState and useEffect

export const ToughtList = () => {
    const [updateLikes, setUpdateLikes] = useState('')
    const [thoughtList, setThoughtList] = useState([])
        useEffect(() => {
        fetch('https://happy-thoughts-api-hanna.herokuapp.com/thoughts')
            .then(res => res.json())
            .then(data => setThoughtList(data))
    })

//likes

    const onMeLike = (postId) => {
        const options = {
            method: 'POST',
            headers: { 'content-type': 'application/json', },
        }
        fetch(`https://happy-thoughts-api-hanna.herokuapp.com/thoughts/${postId}/likes`, options)
            .then(res => res.json())
            .then((data) =>  setUpdateLikes ([data, updateLikes]))
        }
    

    return (
        <section>
            
            {thoughtList.map(singlePost => (
                <div className="post">
                <div key={singlePost._id}>
                    <h3>{singlePost.message}</h3>
                    <div className="post-details">
                            <div className="like-container">
                                <button className="like-button" onClick={() => onMeLike(singlePost._id)} ><span role="img" aria-label="heart">❤️</span></button>
                                <p className="numberOfLikes"> x {singlePost.hearts}</p>
                            </div>
                        <p className="date" >{formatDistance(new Date (singlePost.createdAt), Date.now())} ago</p>
                    </div>
                </div>
                </div>
            ))}
            
        </section>
    )
}

export default ToughtList
