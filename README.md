# Happy Thoughts

This is a project made with React states by fetching and posting data to an API. 
It is like a 'Twitter' version - posting only Happy Thoughts. 

## The Problem

The function available should be to see the last 20 posted Happy Thoughts, to post new Happy Thoughts and to like posted Happy Thoughts. 

To do that I created one component for each function. All are linked together in the 'App.js' file. In the first one I fetched the list with the latest 20 thoughts from the API. The API list got filtered. Here I also used the 'useEffect' hook. In this component with the GET method from the API I have also included the 'Likethoughts' component since the number of likes needed to be fetched as well. Here we also have a method updating the numbers of likes when the heart on each Happu thought is clicked. The moment-module is used to set a nice format on the date for when the Happy Thought were posted. 

The 'Likeathought' component itselfs includes a POST method to the API. It adds 'hearts' to the Happy Thoughts by comparing the id's on the thoughts liked. 

In the 'Postthoughts' component there is a fetch-method posting new Happy Thoughts to the API. A form with a textarea-element is included for that. Unfortunately the whole API rerenders with a window update when posting new thought, I didn't solve it in another way right now. It might be related to that I added the POST and GET method in different components. The submit-button is disabled if the number of letters in the input-field doesn't meet the requirements for the API. It is also shown in red when the number of letters exceeds 140 characters. 

## Learning objectives

- Lifecycle of a component in React

- How to use the useEffect hook in React to perform actions 

- How to call API's from React and put the data into state

- How to POST data to an API

## Tech

- React JSX

- CSS

- HTML5

## View it live

Link to view the webpage live: https://happyminds.netlify.app/

