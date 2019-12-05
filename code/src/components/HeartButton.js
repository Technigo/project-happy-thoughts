import React, { useState, useEffect } from "react"


export const HeartButton = (props) => {

    const [liked, setLiked] = useState(false)

    const handleHeartSubmit = (event) => {
        if (liked === false) {
            setLiked(true)
        } else {
            setLiked(false)
        }

        event.preventDefault()


        fetch(`https://technigo-thoughts.herokuapp.com/${props.id}/like`, {
            method: 'POST'
        })
            .catch(error => console.error("Error:", error))




    }
    return (

        <form onSubmit={handleHeartSubmit}>
            <button className="heart-btn" style={liked ? { backgroundColor: "pink" } : { backgroundColor: "#e7e7e7" }}>
                <span role="img" aria-label="Like post">❤️</span>
            </button>
        </form >

    )

}


// import React, { useState } from "react"


// export const HeartButton = (props) => {

    // 'const [like, setLike] = useState(false)

    // const handleHeartSubmit = (event) => {

    //     event.preventDefault()

    //     fetch(`https://technigo-thoughts.herokuapp.com/${props.id}/like`, { method: 'POST' })




    // }
    //     return (

    //         //<form onClick={props.heartSubmit}>
    //         <button onClick={props.heartSubmit} className="heart-btn">
    //             <span> ❤️ </span>
    //         </button>
    //         //</form >

    //     )
    // 
//}// 
