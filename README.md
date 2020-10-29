# Happy Thoughts 💌
This week's project was to build a twitter like app called "Happy Thoughts" where you can see other people's happy thoughts, post your own and give a ❤️ to existing ones. 
We used the Happy Thoughts API 💌 for this and the main goals of this project was to learn about a React⚛️ component's lifecycle, how to react to changes in state/components using the useEffect hook, as well as, how top POST data into the API.

## Planning & What I learned 🧩
- My project consists of an App component that acts as the main parent component. 
- I have a Thoughts List component that shows all the messages posted by fetching the data from the API. 
- I then have a thought card component that that is mounted in the Thought list component and gets the data through props and a map() since thge data from the API is an array. In this component I also implement a "heart" functionality, where ther user is able to leave a  heart to a specific message, this is done by having a function that handles the like function and adds a heart to a message by it's id. 
- Then I build the Thought Input component that does a distinct fetch POST request and we're able to add a new thought to the API. Once this happens, the page reloads so it's updated with the most recent thoughts and these are sorted to show the most recent ones at the top. 
- In this component I also implemented some validation, the button is disabled until the user reaches a certain amount of characters and the max length of message can't be greater than 140 characters. To make the user aware of the message length I also implemented a characters counter.

Tech ⚡️
- JSX
- React
- Javascript
- HTML
- CSS


## View it live 🔴

https://happythoughts-sofia.netlify.app/
