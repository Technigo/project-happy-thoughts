import React from 'react'

import './heart.css'

/* Component for heart: 
Should be a button that sends likes
When a thought has gotten likes, it should show how many likes the thought has
POST https://happy-thoughts-technigo.herokuapp.com/thoughts/THOUGHT_ID/like 
const [like, setLike] = useState

Display how many likes using useEffect:
useEffect(() => {
    return <p>{likes}<p>
}, [likes]);

Display time using useEffect:
useEffect(() => {
    return <p>{time} ago}
}, [time]);

By passing in the array [] as a second argument 
it means that the component won't rerender
if the value inside the array still is the same as before. 
Optimizing by skipping effect.

If you use this optimization, make sure the array includes 
all values from the component scope (such as props and state) 
that change over time and that are used by the effect
If you want to run an effect and clean it up only once 
(on mount and unmount), you can pass an empty array ([]) 
as a second argument. This tells React that your effect 
doesn’t depend on any values from props or state, so it 
never needs to re-run. This isn’t handled as a special case 
— it follows directly from how the dependencies array 
always works.*/

export const Heart = ({ text, styled, onClick }) => {
    return (
        <button className={styled} type="submit" onClick={onClick}>
            {styled === 'heart__btn' && <span><img className="heart__btn-icon" src='./heart.png' alt='Heart icon' />{text}<img className="heart__btn-icon" src='./heart.png' alt='Heart icon' /></span>}
            {styled === 'heart__like' && <img className="heart__btn-icon" src='./heart.png' alt='Heart icon' />}</button>
    )
}