# Happy Thoughts 💌

I've built a fullstack Twitter like application where users can POST, DELETE and GET happy thoughts. I've created the application using React.js, the React hooks useState and useEffect, and an API which I've built myself. 


## The problem

The main task was to build an application where a user can post, read and delete happy thoughts. 

Before I dived into coding I started out sketching with pen and paper what kind of React components I would need, the flow of the components and what the components were to do. I decided to make the App.js component the main component with most of the functions and all of the useStates in it. With the sketch done and my decision on how the flow of the components where to be, I proceeded to build the structure for the API get and post requests, the message list containing the content of the message, how many likes it has received and a time stamp (GET request), the form where the user can post a new message (POST request) and the heart button so that the user can send likes (POST request) on a message. After that I proceeded to style the page according to a given design, which I added a few of my own styling ideas to. 

I also added a counter below the form input that updated as the user types and shows how many characters are remaining. If a message doesn't meet the requirements of the API (being 5 characters long minimum and maximum 140) when posting a new message, the user will get a friendly error message stating what's wrong with the message and the focus will be once more put on the textarea. I've also added the possibility for the user to enter a username (or remain anonymous, which will be what is shown on the message if no user is filled in) and a tag, which will be displayed in the thought.

If I had more time I would've added an animation for when a thought is submitted and appears in the message list. 


## View it live

* For my live project, see this link: https://heuristic-bassi-e1a3f1.netlify.app/ 
* For my API, see this link to my GitHub repository: https://github.com/IsabellaM5/project-happy-thoughts-api