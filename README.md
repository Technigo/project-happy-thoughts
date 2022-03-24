# Happy Thoughts

Built a website with React to read happy thoughts that are posted from an external API. It lists the most recent 
thoughts and users are able to post new thoughts in a form. Users are also able to like happy thoughts and see 
how many likes there are for each thought. 

## The problem

Before I began writting code, I sketched out what kind of components I would need and what they should do. This
gave me a better picture of what code I would need to write and what kind of states I would need. The next step 
was to fetch the thoughts from an external API and then display them into card components. 

Then I moved on to building a form so users could write a happy thought and submit it. As well as implementing 
a like button allowing users to like happy thoughts and see how many likes there are for each message. In this 
project I also included error messages back from the API to display a user friendly message for users if the 
message trying to be submitted was empty, too long, or too short. Lastly, I focused on creating a loading state 
to show a loading spinner while waiting for the API to fetch the list of recent thoughts. 

The most important lesson I learned this week was how to use the useEffect hook in React to perform actions when components mount, unmount, or when state changes. 

## Demo

https://savannah-happy-thoughts.netlify.app/
