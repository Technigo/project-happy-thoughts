# Happy Thoughts

This week we created a Twitter-ish app that fetches from a public API with three endpoints to show the last 20 happy-thought messages, new messages and the number of likes on the individual messages.  
We learned to use useEffect to do the fetch of the old happy-thought messages at the exakt time when the fetch-component was mounted. 
We were given a design to follow for our app which consists of a form to post new happy-thoughts (6-140 characters or disabled button), previous happy-thoughts messages with a heart button rendering likes when pushed and that changes color when at least one like. 
It also shows how many likes the message has recieved and how long ago it was posted.

Regarding accessability I did cross-browser testing on Crome, Firefox and Edge and tabbing/enter works with typing, posting and liking on all of them. I used semantic html when possible and aria span and labels on the emojis. 
I used https://validator.w3.org/nu/ for validating, and https://wave.webaim.org/ helped me add a htmlFor label on the headline of my form to be better for screenreaders.

## The problem

I had issues in the beginning of mapping the array with the old happy-thought messages, where I could see the array in the console but it would not be displayed. This I solved using a component instead for the messagecards and keeping the mapping in MainContent.js. 

I tried using date fns and newDate but got errors that date is a string so used moment instead, but found out later that moment is deprecicated, so If I had more time I would solve this. 

## View it live
https://send-happy-thought.netlify.app/

