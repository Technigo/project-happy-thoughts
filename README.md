# Happy Thoughts

Replace this readme with your own information about your project.

The task was to create a messenger app which could fetch existing messages and 'likes' from an API and also
post them as well using a form and 'like' button. 

## The problem

Describe how you approached to problem, and what tools and techniques you used to solve it. How did you plan? What technologies did you use? If you had more time, what would be next?

I created a map in my general 'app' component and mounted other components into it: one to return the text of every post, one to return the number of likes, one to return the time it was posted. Any new message which was posted by the user
was added to the the existing array of messages being displayed in the map, which meant it would update immediately. 
The likes were sent using a fetch request which returned a new object featuring the same message id and text but with a new
'like' count. I used useState() to update the number of 'likes' each time the button was clicked. I also used localStorage
to log how many times the user him or herself had liked an individual post. 

## View it live

https://festive-heyrovsky-dd1229.netlify.com
