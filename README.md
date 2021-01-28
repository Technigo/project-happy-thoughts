## View it live
- https://happyhappythoughts.netlify.app/
## Back-end for this project
- https://share-happy-thought.herokuapp.com/thoughts
- Github repo: https://github.com/ellenbjo/project-happy-thoughts-api


# Happy Thoughts
The focus for this weeks project was to practice GET and POST request to an API and use React useState and useEffect hooks to update and handle the data. The challange was to build a Happy-thought app with a form and a list of the latest 20 thoughts added to the API.
The design should be as close as possible to the design sketch provided in the project brief.

## The project
I have structured my project with three components, App.js as the parent component and ThoughtList.js and ThoughtMessage.js as children components. All the connections to the server, the GET and POST requests should go through App.js. The functions and data that is needed in the child components are passed as props. When a POST request is done a new GET request is done immediately to get the updated information from the server to show in the browser. 

## TECH 
- React
- JSX
- Javascript
- API 
- CSS
- HTML 
