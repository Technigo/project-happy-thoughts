# Happy Thoughts
 
This assignment was to create the fundamentals of a twitter-esque social media app using GET and POST fetches, React, states and useEffects
 
## The problem
 
This week I was wiser and decided to first of all get blue level done, then focus on extra functionality as time allowed. It worked out really well and I’m happy with the results.
 
I used useEffect to only fetch new messages on page load, as to not overload the endpoint with requests as soon as a state changed (since I had the textbox for new posts update on every character change, there would have been a lot of attempted fetches otherwise!)
 
I noticed a bug with new posts that they’d claim to be made a few seconds in the future. This was likely because I wasn’t giving moment (the date handling NPM library I used) the time offset between the Happy Thoughts server and my local time. I solved this somewhat crudely by simply subtracting 30 seconds from the post time before displaying locally, but it worked for the level of precision needed for moments .fromNow() functionality and the project itself.
 
As per Maria Pogosjan's recommendation, I used the NPM library Toastify for notifying the user of their posts being too short or long. I also wanted to add animations to accompany a failed post, but I couldn’t manage to figure this out in time. Other things I would do if I had more time would be to add the liked posts into local storage, so this would be remembered on reload.
 
## View it live
 
Netlify Build: 
