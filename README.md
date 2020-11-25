# Happy Thoughts

Week 11's project was aimed at practising our React useState skills while also being introduced to useEffect and thinking about a React components lifecycle.
The goal was to build a **Happy Thoughts** app where we can fetch and post data using a working API.

## My process

I built the app using 3 main components: App, ThoughtsList and ThoughtsForm. App component is where the initial fetch takes place, we create and then map over an array and send the data as props to the ThoughtsList component. This displays the already existing Thoughts in different cards.
Here I created a function called handleClick which listens for a click on the heart icon (like button) which then envokes the onLiked function to increase this value. This change in turn gets posted back to the API and the API is called again to update the page.

As well as using the useEffect hook on the initial fetch (this is to control the amount of times the page refreshes and avoid an infinite loop), I also implemented a page refresh every 10 seconds using the setInterval function.
I also implemented some validation for the Form: the Send button is disabled unless the amount of characters entered is between 5 - 140. I included a small character counter which displays in red when this number is outside of the accepted amount.

## Tech

- useEffect hook
- useState hook
- JSX
- React
- css

## View it live

Send some happy thoughts to our shared API!:

https://think-happy-thoughts.netlify.app/
