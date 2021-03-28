# Happy Thoughts
This was a project built during the Technigo bootcamp. The project consisted in building a twitter-like page where the user should post only happy thoughts.
The purpose was to learn about:
- How to use APIs in React, firing requests within `useEffect`.
- How to put the result of API responses into React state to show in the page.
- What it's like to work with an API which you both send and receive data from.

## The problem
I started building my whole project in App.js and put all states, useEffect and fetch requests here. Later I decided to divide the different parts of my site into separate components resulting in a component for the input form where you can write your happy thoughts, one for the message list to post the 20 previous messages and within this one a component for the message elements. In the message container I have added functionality for the user to like a specific message.

Additionaly I added an error message component that is triggered if validations of textinput fails. 

I made the website responsive and added some animation to the header as well as implemented some extra features such as making the heart button change background color once clicked by using conditional operator inside button tag.

Next time I will start off by dividing the app into separate components from the beginning and making it mobile first from start, which I had to adjust in the end in this project.

I enjoyed practising fetching data from APIs in react and also making a post request to add new data to the API. I also got the chance to practice more on the use of conditional operators.

One problem that I faced was adding an image that was stored locally in the public folder. By researching I found a solution for this on Stack Overflow.

If I had more time I would have added some more animations.

## View it live

View it live on Netlify - https://sofias-happy-thoughts.netlify.app/
