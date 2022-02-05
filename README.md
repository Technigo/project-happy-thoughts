# Happy Thoughts!

In this week's project,I had a chance to practice my React state skills by fetching and posting data to an API.
For this project I am using a simple API to collect 'happy thoughts'. Think of it as our own version of Twitter, but with less negativity, and 100% fewer US presidents using it.
A good idea before you start writing code was to sketch out what kind of components I need, what their responsibility should be, and what kind of state I'll need. This helped me to have a clearer idea of what code you need to write. The next step was to start with listing the thoughts which are already in the API. Then I moved on to building a form to post a new thought, and finally implemented the heart button on an existing thought.

When you submit the form to add a new thought, the API returns the new thought object in the same way it would look if it was part of the full list response. You can use this to avoid having to send a second API request to fetch all thoughts again after submitting a new thought. See the [react documentation](https://reactjs.org/docs/hooks-reference.html#usestate) for a more detailed explanation of adding an object to an existing array in state, but in a nutshell, you'll want to do something like this:

## The problem
How to use POST requests to send data to the API, and how to How to store data in the database from POST requests was quite tricky part to wrap my head around. But once the notion was cleared, it was really fun to try validating datas and it was exciting to see how to build an API which includes handling of user input and works well with an existing frontend.

## View it live!

frontend: https://haruahn-happiness-site.netlify.app
backend: https://haruahn-happiness-api.herokuapp.com/
