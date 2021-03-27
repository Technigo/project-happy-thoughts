This is a project made during the Technigo Bootcamp. 

# Happy Thoughts

This is a 'happy-thoughts-twitter'ish' site where you can see a list of happy thoughts submitted by others, like their messages and post your own happy thoughts!

## The problem

The assignment was to build a site using React, useState and useEffect to fetch API's from a public API.
With the data you should create a twitter'ish site with a list of messages, the possibility to like messages, see how many likes a message has received and a form to submit your own message.
To achieve this I did 3 fetches, one for the list, one to POST a new message and add to the list, and one to POST a 'like' to a message.
Besides to have the functions working, the assignment was also to create a site that looked as close to the example design as possible.

The project structure:
App.js where all the fetches are made and everything is 'assembled'.
Three components - Messages, MessageElements and NewMessageForm.
In Messages.js I .map the fetched array to create a list of messages and it also consists of the MessageElement.js which is the heart button, the number of likes a message has as well as how long ago the message was sent.
In MessageForm.js I have the form to submit your own message.

I'm satisifed with how it turned out and the fact that it looks very much like the example design.
Even though it takes some time to wrap your head around the structure and where to put all functions and fetches and what needs to be passed as props, it feels like it's getting clearer.
If I had more time I might add an animation when a message is posted.


## View it live

https://send-happy-thoughts.netlify.app/