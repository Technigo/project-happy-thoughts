# Happy Thoughts

This project was made my using an API of happy thoughts to fetch and get but also to post new data into the API by writing and submitting new "happy thoughts" to be generated on the page and in the backend like a feed of the latest 20 posts. A design was given to be followed.

## The problem

I had a few roadblocks in this project. One example was that new thoughts that I tried to submit wasn't getting posted to the page, after investigating it didn't seem to appear in the backend either (using POSTMAN to check the data). Since the rest of the code was working I did not get a error and therefore needed to trace the problem to the submit-input component and app.js. after comparing them side by side I realised that the props-naming were not the same and therefore they did not connect. after solving that I was able to continue with only minor roadblocks.
If I had more time aI would add a error-catching message on the front end side when the input is too short or too long.

## View it live

https://waliem-project-happy-thoughts.netlify.app/
