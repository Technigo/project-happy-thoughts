# Happy Thoughts 💌

I've built a Twitter like app where users can post and read happy thoughts by using React.js, get and post requests to a public API and the React hooks useState and useEffect.


## The problem

The main task was to build an app where a user can post and read happy thoughts. 

Before I dived into coding I started out sketching with pen and paper what kind of React components I would need, the flow of the components and what the components were to do. I decided to make the App.js component the main component with most of the functions and all of the useStates in it. With the sketch done and my decision on how the flow of the components where to be, I proceeded to build the structure for the API get and post requests, the message list containing the content of the message and likes it has received (get request), the form where the user can post a new message (post request) and the heart button so that the user can send likes on a message. After that I proceeded to style the page according to a given design. 

I also added a counter below the form input that updated as the user types and shows how many characters are remaining. If a message didn't meet the requirements of the API (being 5 characters long minimum and maximum 140) when posting a new message, the user will get a friendly error message stating what's wrong with the message. 

If I had more time I would've added a function to handle loading states and add animation for when a thought is submitted and appears in the message list. 


## View it live

For my live project, see this link: https://heuristic-bassi-e1a3f1.netlify.app/ 