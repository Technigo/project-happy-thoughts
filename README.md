# Happy Thoughts

This site is a simple message thread collecting positive vibes. The user is able to post a message and like messages posted by others. I did the project during the Technigo Bootcamp for frontend developers in Fall 2020.

## What it does

Following the requirements of the assignment, the site will fetch messages from an API that was specifically created for this project (not by me but those who set up the project as a bootcamp assignment). (Edit January 2021: I've now created my own API to store Happy Thoughts! Find the GitHub project here: https://github.com/HenrikeW/project-happy-thoughts-api )
When the user sends a message, it will be added to that same API, data from the API is fetched again and the list of messages refreshes. The same is true for every like a user sends. 

In line with the requirements, the messages can only be sent if they are between 6 and 140 characters long. This is also visually signalled to the user as the text on the "send"-button changes color if the message is valid to be sent. 

The likes are not user-specific which means a user can like a single post as many times as he/she wants and there is no way of rejecting a like. 

For every message it is shown how long ago the message was sent.

The design follows a template provided for the assignment.

## Tech used

I built the site with React in JavaScript, also using HTML and CSS. It was the first time I used useEffect in React and the first time I used the POST-method while communicating with an API. Further, the "moment" library for JS is used to present the time stamp for each message in a nice way to the user.

## Browser compatibility

The site is responsive and was tested on a desktop PC with dev tools in Chrome, Firefox and Edge, as well as on an Android phone in Chrome and Ecosia. Everything works as expected. 

## View it live

The site can be seen and used here: https://henrikes-happy-thoughts.netlify.app/ 
Only happy thoughts, please 😊
