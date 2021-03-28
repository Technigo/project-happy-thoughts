# Happy Thoughts
In this weeks project the purpose was to build a twitter-like page where the user should post only happy thoughts. 
What i learnt this week:
- How to use APIs in React, firing requests within `useEffect`.
- How to put the result of API responses into React state to show in the page.
- What it's like to work with an API to both send and receive data from.

## The problem

To start the project i began by building the project in App.js file. I started with the fetch request and to actually get the messages to show by adding states, useEffect and fetch requests in App.js. When i felt happy with the result i started to think of how to divide the different parts into components. I decided to add a component for the new thoughts form - where you write your happy thougth. I added a component for the thoughts list to post the latest thoughts messages by mapping through the array of thought objects - and I also added a seperate thought element component for each single thought object. In the single thought element i added the functionality to where you could like a thought message and when liking the number should increase. 

If i would have more time i would first of all start to plan the project better by thinking of the logic, which components i would need and how to start adding that logic straight away into components. I would also play around more with animations to a newly posted thought and add a error message if the thought was getting longer when you type over 140 characters.

This weeks project has been really fun to work with. I feel more confident working with APIs and fetch requests. Very nice to be able to put this into practise in react this time.

I would also like to add more web accesibility (which i will add later on).

## View it live

https://no-bad-thoughts-inc.netlify.app/