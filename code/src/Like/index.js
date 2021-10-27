import React from 'react'
import './like.css'
import { LIKE_URL } from '../utils/urls'

export const Like = ({ hearts, id, thougths, setThougths, fetchThougths }) => {

    const handleOnClickLike = () => {
        const options = {
            method: 'POST'
        }
        fetch(LIKE_URL(id), options)
            .then((res) => res.json())
            .catch(error => console.error('Error:', error))
            .then((newLike) => {
                //1. here is updated only locally but it don't update the latest likes
                //important to keep this code as example

                // const updatedThogths = thougths.map(item => {
                //     if (item._id === newLike._id) {
                //         item.hearts += 1;
                //         return item;
                //     } else {
                //         return item;
                //     }
                // })
                // setThougths(updatedThogths)

                //2. here I update all the thoghts fethcing every time, which affects performance in bigger apps
                fetchThougths();
            })
    }

    return (
        <div className="like-content">
            <button className={`heart-circle ${hearts > 0 ? "red" : "gray"} `} onClick={handleOnClickLike}>
                <i className="fas fa-heart"></i>
            </button>
            <p className="like-counter">x {hearts}</p>
        </div>
    )
}
