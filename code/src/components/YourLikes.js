import React, { useState } from 'react'

export const YourLikes = () => {
    const [like, setLike] = useState()

    return (
        <span className="you-liked">
            you liked this post: x times
        </span>
    )
}