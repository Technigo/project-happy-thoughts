/* Thought component that shows all the thoughts in a nice way
Should also show when the thought was posted (10 minutes ago/5 seconds ago)
Each thought displayed inside a flex-box card? 
GET https://happy-thoughts-technigo.herokuapp.com/thoughts 
THousghts are going to be an array that is displayed, Use a map() to show each thought on different card?*/



export const Thoughts = ({thoughtList}) => {
    const [thoughts, setThoughts] = useState ([])
    const THOUGHTS__URL = 'https://happy-thoughts-technigo.herokuapp.com/thoughts'

fetch(THOUGHTS__URL, {
    method: 'GET',
    body: JSON.stringify({message: {thoughtList}})
})
.then((response) => response.json())
.then((newThought) => {
    setThoughts((previousThoughts) =>[newThought, ...previousThoughts])
}) /* This should be replaced with .then for getting thoughts, not posting */

    return (
        <div>Thoughts</div>
    )
}