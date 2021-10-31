# Happy Thoughts

This was a Technigo week 11 project and consisted of building a React page where you'd be displaying information from a JSON API (the 20 latest messages) according to a set design, be able to like the messages and post messages of your own to the API. It was a practice in working with several components and mounting them as well as an introduction to using the useEffect hook. 

## The problem

I started out by building the basic functionalities in the App.js and later split the code into components. It felt like a good practice in what information needs to be passed from one component to the file where it's mounted, similar to passing information between separate functions in vanilla javaScript. After finishing the basic requirements I wanted to add some extra features which ended up in a line of text below the textarea communicating with the user about the length of the message and if it's too long or to short, and a third background color for the likes button that signals that the current user has liked specific posts. The current users likes are also saved in the localStorage and stays visible if the page reloads. I had some struggles with the last feature but I'm proud I could make it work. 

## View it live

https://kind-haibt-7a22e5.netlify.app/