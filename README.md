# Happy Thoughts
A project built during the Technigo bootcamp. This week the project was to build a twitter-like page where the user could post happy thoughts. We've learnt about: Fetching and posting data to an API in React, firing requests within useEffect.

## The problem
I started with fetching the api to get the existing data in App.js After that I created five more components, one for the thoughts list, one for the user being able to post a new thought, one for the already sent messages where the user can give a like to a message by clicking on the heart, one for the submit button, and one for showing an error message to the user when not fulfilling the limitations on number of characters set by the backend. When I had built the structure of the app I styled it according to the guidelines.

In my fetch post requests I tried out the different options: x) updating the local state and z) refetching data from the server, to be able to see their differences in terms of re-rendering. 

I used the npm library moment to convert time from now. 

What took most time this week was the fetch post request to add an error message component. I spent hours on Stack overflow to figure it out, and posted a question on the friday's QnA session. Both of those attempts together gave me a deeper understanding of fetch requests that will be useful futurewise.

If I had more time I would implement a loading spinner to show to the user whilst waiting for the response by the API. 

## Tech
React
JSX
API
useState
useEffect
CSS
## View it live
Write your happy thoughts here: https://caro-happy-thoughts.netlify.app/
