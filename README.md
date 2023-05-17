# Happy Thoughts

Happy Thoughts is a project in which I got to practice fetching data from an API and manage state with useEffect hooks and passing props.

I approached the task by trying out different structure with my components, and changed it a couple of times. I ended up having most of my state variables and fetching data in the app.js, which I learned by building this project was not the most effective way of following the logic of the code. But for this project and for me this structure was good enough for now.  

In the NewThoughts-component i keep the form input and handle the onLikesIncrease. In the ThoughtList component the user input data is handled and rendered through the map(). The thoughtList also holds the function for loading-message. 

## The problem

Things id like to improve the site (and intend to fix later on) is:

1. getting the submit button to not being clickable until user reached minimum amount of characters in the input field. 
2. Adding an alert if user is trying to submit with to few characters (right now its possible to submit even though nothing is sent to the api). 
3. When clicking the like-button, right now all the hearts is bumping, its only the clicked heart thats supposed to be triggered by the animation. 
4. Overall the code isnt available enough for screenreaders, ill be adding labels and more semantic code syntax later on. 

## Backend

During the backend sprint I learned how to build an express API which i replaced this code with, so now Im using my own backend API for this project. 



## View it live
The frontend deployed page: https://sweet-unicorn-99f547.netlify.app/

The backend is deployed using google cloud, here: https://project-happy-thoughts-api-ss6ohtlv2q-lz.a.run.app/
