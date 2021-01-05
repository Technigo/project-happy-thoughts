# The project: Happy thoughts
This weeks project was to learn about fetching data from the api by doing a GET request and posting data to the api by doing a POST request. The api in question was the Happy thoughts API 💌. We also learnt about using React useState and useEffect hooks to handle the data for the posting and fetching to happen as well as the lifecycle of a React component.

We also learned about how to pass data from the server to the main parent component, App.js, which is then passed into the children components, ThoughtsMessage.js and ThoughtsForm.js, and then using these in the JSX elements. Then passing the any new data, such as if the user hearts a thought or enters a thought into the form, back to the parent component, App.js. Which is then postedk to the server and then doing a new fetch to update the client state.

## The main requirements:
1. The page should follow the design as closely as possible.
2. List the thoughts in order of most recent at the top and oldest at the botton.
3. The thoughts should show the content of the message and how many likes it recieved.
4. Have a form to create and post a new thought.
5. Implement the heart button to send likes to a thought.

## What I achieved:
1. Worked with 3 main React components App.js, ThoughtsMessage.js and ThoughtsForm.js to fetch data and post data to the api, create JSX elements for both the form and messages to be able to show recent thoughts and post to the api.
2. Used useState to store and update data as well as pass from the parent component, App.js, to the children components and vice versa by way of props.
3. Create a button for the hearts which when pressed will update the number of heats in the hearts object property on the api. Done by way of a post request in App.js.
4. Styled the page as closely as possible to the requested style including adding conditional statements for the heart button. Depending on how many likes it get's the bakground colour of the button will be different.
<<<<<<< HEAD
6. Working with validation on the form and disabling the button if the amount of letters the user has inputted is below or above a certain amount. Otherwise it will be enabled and the user will be able to sumit their message.
7. Made the site responsive so it can be viewed on mobile, tablet and desktop devices.
=======
6. Working with validation on the form and disabling the button if the amount of letters the user has inputted is below or above a certain amount. Otherwise it will be enabled and the user will be able to sumit their message. 
7. Made the site responsive so it can be viewed on mobile, tablet and desktop devices. 
>>>>>>> 70bebd920f07b9e70ec5d9f00dacbc6b72cf4488

## What tools I used 🛠️
1. NPM/Node.js
2. The React starter App that came included in this project repo
3. React, useState, useEffect and moment dependancies
4. CSS
5. Very little HTML
6. Googaling, Technigo videos and lectures and help from my team.

## View it live ❤
https://silly-wing-fdef06.netlify.app/  

