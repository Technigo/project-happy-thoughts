# Happy Thoughts ❤️

This week's project was to continue practicing React state by fetching and posting data - happy thoughts - to an API. We have worked with an API with three endpoints. 

# View it live

https://inspiring-lalande-9954d9.netlify.app/

## What I have learnt

I have learnt: 

- what a component lifecycle means
- how to use the useEffect hook in React to perform actions when components mount, unmount, or when state changes.

In this project, I have also learnt to: 

- fetch message from the API using a GET request
- create and send new messages using POST with a JSON body
- send likes back - when user like a message - to the API-server using another endpoint and the method POST but without a body

In sum, this week has taught me how to use APIs in React, and how to fire requests within 'useEffect'. I have also learnt how to put the results from the API responses into React state to output in the browser. This week I have both sent and received data from an API-server.

# Tools and methods I have used

- npm Node.js
- React - useState, useEffect
- fetch
- GET and POST request to API-server
- jsx, css, some html

I structured elements in different component-files. Each component also has it's own css-file. I saved the URL in a separate file. I also saved some general css in a separate file (in index.css). In App.js I have both the GET and the POST requests. I also tried to keep the child-components as clean as possible - i.e. to put the logic in App.js.

# Requirements for this week

The page should follow the design - and it does. Further, the site should sort the most recent messages at the top and older ones at the bottom. The site should also show the content of the message and how many likes each message has received. There should also be a form in which a user can post a message. The heart button should be clickable and onclick send a like as a new message.

All this I have achieved. The site it also responsive and has a send-button that is validated and set to 'disable' if the validation fails.




