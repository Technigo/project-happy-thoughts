# Happy Thoughts 💌
The focus for this weeks project was to learn about a React component's lifecycle and how to react to that. We've practiced our React state skills by fetching and posting data to an API, and also looked at how to react to changes in state or a component mounting with useEffect hooks. The goal was to build a simple Happy thoughts app which fetches the 20 most recent posts from the API, a form where the user can post new thoughts, and also a possibility for the user to like already existing thoughts.

## Solving the assignment ⚛️
- My app consists of four components + one main App component. To try more of a "waterfall- approach" I've put all of my fetch-statements in the App-comonent, using an initial useEffect  hook to control the fetch of happy thoughts from the API (preventing the fetchThoughts-function from repeting itself in an infinite loop). 

- The array with data from the first fetch is passed to the ThoughtsList component, and the rendered in this components using .map(), creating one separate article for each happy thought. 

- The like-button is also created in the ThoughtsList component, and is triggered by the function handleLikes, which in turn will trigger the function onLike with the parameter of thought._id. onLike is located in the App-component, and does a POST request to the API, adding more hearts to the thought which matches the _id of the thought on the like-button clicked. The updateLikes-function updates the number of likes returned from the API and adds one more heart to the count of likes each time the button is clicked. 

- I started out with the component Thoughtslist, to perform an initial fetch to be able to see the data from the api that we we're going to work with. After that I moved on to the component Thoughtform to be able to post new data to the API. In this stage I also added functionality for showing the counting of characters below the message, and the button to be disabled if the message is less than 5 characters or more than 140 characters. 

- The form is validated through two different ways: if the text consists of more than >140 characters, a new class will turn the counter text red, and the button will also be disabled if the user frites less than 6 characters or more than 140 characters. 

- I'm really happy with the animation of the beating emoji-heart at the top of the form. It's a simple animation, but it was really fun to try it out when not having so much experience from before in working with animations.

- If I had more time I would have loved to add more animations (on the like buttons for example), added functionality for handling loading states, and some functionality for showing some kind of summary of the amount of likes the user has passed out in their session.   

## What I learned 🦉
- I'm very happy that we've gained more insights into working with API:s in React, and that we're starting to learn more about different hooks. One thing I will definietly take with me into the next project is to decide more clearly beforehand how I want to structure my project and components. I started out with a lot of code in App.js, and then began to break out code in more components (for example I tried a separate component for thought and like-button) but this approach turned out to make the code difficult to follow and I wasn't able to get the like button to work, so I then decided to go back to my initial approach with having the fetches in App.js, and the two main-components Thoughtform and ThoughtList, and two smaller components for header and footer.

## View it live 👩‍💻


