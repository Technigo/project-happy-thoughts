# Project Happy Thoughts App

This project makes use of React state by fetching and posting data to an API.
Focus of the project is:
- How to use APIs in React, firing requests within `useEffect`.
- How to put the result of API responses into React state to show in the page.
- What it's like to work with an API which you both send and receive data from.
The project was a part of Technigo Bootcamp.

## Tech Used
- React
- Javascript
- JSX
- API
- CSS

## The problem

I created two components. One form-component for posting a message, and one list-component that shows all posted messages (and that renders when a new message is posted).
The app-component handels GET and POST requests to the API and useEffect.
A like-button is implemented in the list-component that shows all likes a post gets. The color of the like-button is changed depending on number of likes (by using conditional class name).
Form validation is implemented so that the message has to be between 6-140 characters for the submit-button to work. If user types more than 140 characters the text-input field turns red. 
Simple but responsive styling using Flexbox and media-queries.

If I had more time I would have added som animations/transitions on button and like-heart.

## View it live

https://hannas-happy-thoughts-app.netlify.app/
