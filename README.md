# Happy Thoughts

This was a project built during the Technigo bootcamp. The project consisted in building a twitter-like page where the user should post only happy thoughts. We learned about:

How to use APIs in React
How to use useEffect.
How to put the result of API responses into React state to show in the page.

## The problem

I started building my whole project in App.js and put all states, useEffect and fetch requests here. Later I decided to divide the different parts of my site into separate components. I added three components, one for the where you send your thoughts, one for the thoughts that has been submitted and one for the loading spinner.

I made the website responsive and added a nice background filled with hearts. I also added background color once clicked by using conditional operator inside button tag. 

I also added character counter, so the Send Happy Thought button won’t be lit until the user has written a minimum of 5 characters. And it will turn grey when the user has exceeded the limit of 140 characters. 

I enjoyed  to continue to practice React and how to make requests and making posts.

One problem that I faced was the my input field didn’t clear when a thought was submitted. I found a solution via a question on StackOverlow and talking to one of my Zebra class mates. 

https://stackoverflow.com/c/technigo/questions/3052


## View it live

https://happythoughts-rosanna.netlify.app/

