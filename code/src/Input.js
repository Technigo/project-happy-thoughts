/* The component where the user inputs a thought
POST https://happy-thoughts-technigo.herokuapp.com/thoughts
Has to be between 5-140 characters, when too long should show a nice error message 
Use conditional here to show error if unvalid input?
const [userInput, setUserInput] = useState 
*/



export const Input = ({input}) => {
    const [userInput, setUserInput] = useState([])

const INPUT__URL = 'https://happy-thoughts-technigo.herokuapp.com/thoughts'

fetch(INPUT__URL, {
    method: 'POST',
    body: JSON.stringify({message: {input}})
})
.then((response) => response.json())
.then((newThought) => {
    setUserInput((previousThoughts) =>[newThought, ...previousThoughts])
})
    return (
        <div>User Input here</div>
    )
}