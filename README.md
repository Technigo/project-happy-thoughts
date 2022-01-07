# Happy Thoughts ♥️

This project's goals is to learn about a React component's lifecycle and how to react to that. We looked at how to react to changes in state or a component mounting using useEffect. We worked with Technigo Happy Thoughts API that gives us previously posted thoughts, possibility to post new thoughts and also like existing ones 💌

Update:
Happy thoughts frontend now has its own Happy Thoughts API to use for this project: it's an Express API using MongoDB Atlas and deployed to Heroku ✌

You can find it live here: https://a1eksa-happythoughtapi.herokuapp.com/

And it's GitHub repository here: https://github.com/A1eksa/project-happy-thoughts-api

# How I built it - What I learned 💪

Project is build using 5 components: App, ThoughtsForm, ThoughtItem, LoadingItem and CharCount. App is the main component where all the data fetching is done with the use of useEffect. This action shows the already existing Thoughts in different cards.
The data fetched from the API in App is then passed on to the ThoughtsItem component via props: the data we got from the API is an array containing all the Thoughts, so I did a map() of the array to create different cards for each thought.
The Form component does a separate FETCH Post request in order to add a new thought to the API. It then reloads the page so that it shows the newly added thought and also the latest data in case new thoughts had been added in the meantime.
A like button was also implementedin the ThoughtItem component, so it is generated for each thought card. When the button is clicked, it will call a onLikesIncrease function which will do a POST request to the API, adding one more heart to the thought targeted by its id.

I have also implemented a counter for how many thoughts i have send during a session. Every time a thought is send the button has a handleIncrement function that gets fired and increments number by one and adds to the counter.

I also implemented validation in the ThoughtForm: the Send button is disabled unless if there is less then 5 and more then 140 characters, also a small character counter is implemented so the user can keep track of the length of the happy thought.

## View it live

🚀 View this project live here:https://happy-thoughts-a1eksa.netlify.app/
