# Happy Thoughts

This project lets you post messages to a facebook like 'wall' of thoughts, and it displays the latest 20 posts. The first prompt is to write what makes you happpy
but after your first post the 'emotion' is changed to a random emotion, hence the address name 'all-the-thoughts'
There is a form for writing new messages and the submit button is disabled if your message is less than 5 or more than 140 characters.
You can also 'like' posts by clicking the heart button and see how long ago they were posted.

## The problem

I am using an API fetch to read in the 20 latest posts made and there is an interval for that fetch every 5 seconds that updates the list of 'thoughts'. For posting new thoughts there is a form component with a textarea since they are easily resizeable. The datestamp for the posts are done using formatDistance from Date-fns. The like function was the area where I had most problems but it was mainly that I didn't really understand the technology behind the post function for the fetches. I managed to get the like function to work with an API that included the post's id, which was stored in the button, but without me really understanding it! I think the more I use it though it will catch on and come more naturally. 
I really enjoyed trying to write components that were resuable, for this project but also for future projects. I challenged myself to have the submit button from the form and the like button to be the same component and I am happy that I got it to work. There are perhaps more props needed than I would have needed if I had made separete ones but it was fun trying to make it work. 

## View it live

https://all-the-thoughts.netlify.app/

api's repo 
https://github.com/amandatange/project-happy-thoughts-api
