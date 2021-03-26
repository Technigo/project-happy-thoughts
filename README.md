# Happy Thoughts

In this project, I have built a Twitter-like app which fetches the 20 most recent posts from an API created by Technigo. The app also includes a form where the user can post new thoughts, and also a possibility for the user to like already existing thoughts.

## The problem

I started by sketching out what kind of components I need. It helped me to structure the code. I decided to have one main App component where I would have all the states and an initial useEffect hook to control the fetch of happy thoughts from the API. And I also have two child components:
    1. ThoughtsList component is responsible for returing jsx for each happy thought message by interating over the array of data from the initial fetch. This component is also respnsible for updating the number of likes on the server when the heart button is clicked by using fetch post request. The fetch in this component also updates the local state of all happy thoughts when the number of likes increases.
    2. NewThoughtForm component contains a form to post a new thought message. When the form is submitted the new thought message is saved on the server by using another fetch post request and updates the list of all happy thoughts.

Although I new what kind of components I would have I still had most of the code in the App component at the begining. And then I moved parts of the code step by step to the child components, making sure everything works. At this point it helps me understand better how to use props.

The form is validated through two different ways: if the text consists of more than 140 characters, a new class will turn the counter text red, and the button will also be disabled if the user writes less than 6 characters or more than 140 characters.

Lastly I styled the page. I made the website with a mobile-first approach and used flexbox for the layout.

If I had more time I would have added animations, for example, when a new thought message is submitted. 

## View it live

See it live: https://happy-thoughts-app.netlify.app/
