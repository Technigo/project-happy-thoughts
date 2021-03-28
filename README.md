# Happy Thoughts

The projects brief was to make a twitter-like feed where the user can se and post messages as well as like them.

## The problem

I started to build the basic fetches in App.js and got the messages in the API to show in a list. The second thing I solved was to make it possible for the user to submit a new message through a POST request and for that to be added to the list of messages to show up when the list is fetched again. I used useEffect to fetch the list only when the message list gets updated from using the submit button in my app. Later on I did add a interval to update it every 5 seconds instead.

Next step was to arrange some components. At first I had the fetches in the specific components it fetched for, but I did change those when I got informed that it's most convinient to keep all fetches and states in the parent - App.js. I added the like button and made a fetch so that likes will be added onClick. I also decided to make it so that you can't spam likes - so if you in the same session click again the like will instead be removed. 

As for showing the time since a message was posted I did a seperate component for displaying this in a good way - so that seconds, minutes, hours or days will be displayed depending on how old the post is.

I also added a character counter and by using states, if-statements and css-classes I could style it so that the counter text becomes red outside the accepted character range. The user shouldn't be able to post if it's otuside the character range, so therefore, I also added warning pop-ups if you try to post a message that is to short or to long.

I had some issues with dependencies in useEffect when fetching message list even though I did put a dependency there. I think it was the problem of to many re-renders. To avoid this I ended up using callback which - if I understand it correctly - makes a "copy" of the fetch and then uses the effect on that. This was also needed for the interval updates. If I didn't use callback for this the interval would not clear properly (even though I used clearInterval) but just iterate and refresh faster and faster. As I had added an loading symbol this was very easy to spot.

Last I added a animation for when any new post is submitted. I found this a bit challenging, but got it working nicely using useRef to compare the latest post in the previous message list to the lastest post in the current message list. If theses did not match - then the post is new and I then made the message list get another CSS-class where the first child (latest post) has an animation. 

If I had more time I would add some more functions to the project, work with the code to make it as optimal as possible and do more logs and tests to understanding the flow of useEffect, useCallback and mounts properly.

Tools: VScode, Postman, Stack Overflow, Slack, ESLint, W3 validator

Techniques: CSS3, HTML5, JavaScript ES6, React + JSX, useState, useEffect, useCallback, useRef, API

## View it live

https://paulines-happy-thoughts.netlify.app/


