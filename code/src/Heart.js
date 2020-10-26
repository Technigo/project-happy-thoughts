import React from 'react'

/* Component for heart: 
Should be a button that sends likes
When a thought has gotten likes, it should show how many lieks the thought has
POST https://happy-thoughts-technigo.herokuapp.com/thoughts/THOUGHT_ID/like 
const [like, setLike] = useState*/

export const Heart = () => {
    return (
        <div className="heart__container">
            <button>Heart</button>
        </div>
    )
}