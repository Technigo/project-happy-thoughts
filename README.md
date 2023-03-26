# Happy Thoughts

Happy Thoughts is a project in which I got to practice fetching data from an API and manage state with useEffect hooks and passing props.

I approached the task by trying out different structure with my components, and changed it a couple of times. I ended up having most of my state variables and fetching data in the app.js, still not sure if i like this build up but it works out pretty well for this project. 

In the NewThoughts-component i keep the form input and handle the onLikesIncrease. In the ThoughtList component the user input data is handled and rendered through the map(). The thoughtList also holds the function for loading-message. 

## The problem

I struggled quite long trying to add a background video to the main-section but could not get it to be in the right place without making the content stay in place and without covering it. Styling using components was more challenging than i excpected. Things id like to improve the site (and intend to fix later on) is:

1. getting the submit button to not being clickable until user reached minimum amount of characters in the input field. 
2. Adding an alert if user is trying to submit with to few characters (right now its possible to submit even though nothing is sent to the api). 
3. When clicking the like-button, right now all the hearts is bumping, its only the clicked heart thats supposed to be triggered by the animation. 
4. Overall the code isnt available enough for screenreaders, ill be adding labels and more semantic code syntax later on. 

## View it live

https://sweet-unicorn-99f547.netlify.app/

