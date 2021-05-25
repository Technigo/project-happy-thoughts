# Happy Thoughts

The assignment was to practice React state by fetching data from and posting data to an API. This should result in a site like Twitter but with only 'Happy Thoughts'.

## The problem

The problem was solved by:
- using the fetch() method to receive data from the API
- using React useState Hook to declare state variables inside function components. 
- using React useEffect Hook to run a function (fetchMessageList) every render of the component, initially when it first loads and every time the state changes. It re-renders the DOM so that it can update the state in the browser.
- creating components to organize the application in smaller, modular pieces.
- passing props into components.

If I had more time I would experiment with how to handle loading states. 

## View it live

Frontend deployed on Netlify:
https://epic-euler-f992c6.netlify.app/
