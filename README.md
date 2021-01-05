# Happy Thoughts
This project's goals is to learn about a **React** component's lifecycle and how to react to that. We looked at how to react to changes in state or a component mounting using **useEffect**. We worked with a 💗 **Happy Thoughts API** which showcases previously posted thoughts, gives us the possibility to post new thoughts and also give likes to the already existing ones 💌

### Update:
I have now created my own Happy Thoughts API to use for this project: it's an Express API using MongoDB Atlas and deployed to Heroku ✌

You can find it live here: https://vane-happy-thoughts.herokuapp.com/

And it repository including Documentation here: https://github.com/VanessaSue27/project-happy-thoughts-api

## How I built it - What I learned
- I've built the project using 3 main components: App, ThoughtsCard and Form. App is the main one collecting all the data from the API by performing an initial FETCH Get request with the use of useEffect. This action shows the already existing Thoughts in different cards.
- The data fetched from the API in App is then passed on to the ThoughtsCard component via props: the data we got from the API is an array containing all the Thoughts, so I did a map() of the array to create different cards for each thought.
- The Form component does a separate FETCH Post request in order to add a new thought to the API. It then reloads the page so that it shows the newly added thought and also the latest data in case new thoughts had been added in the meantime.
- I have implemented a Like ❤ Button: This one is located in the ThoughtsCard component, so it is generated for each thought card. When the button is clicked, it will call a handleLikes function which will do a POST request to the API, adding one more heart to the thought specified by its id.
- I have also implemented a counter for how many Likes we have given during a session: This one is connected to the Like Heart button: every time the Like button is clicked, it will add to the counter. I send this data from the ThoughtsCard component back to the App component via the same handleLikes callback function. Then in App this counter number is connected to an HTML element via State. Super happy I got that feature to work! 💪 And also to have learned a bit about using callback functions to send data from child to parent component in React.
- I also implemented several validation ways for the Form: the Send button is disabled unless the amount of characters entered is the correct one; the textarea also has an attribute for max 140 characters, so the user can't go over that.
- I have added a small character counter, which will turn red when the user only has 10 characters left to reach the max.
- I had a lot of fun implementing these little extra features and gained a better understanding of how to add some conditioned inline styling in React ⚛

## View it live
💕 View this project live here: https://happy-vane-thoughts.netlify.app/
