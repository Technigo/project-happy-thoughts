# Happy Thoughts

The purpose of this twitter-ish project called "Happy Thoughts" was to continue learning React and to use useEffect to do an API fetch.

## The project

Describe how you approached to problem, and what tools and techniques you used to solve it. How did you plan? What technologies did you use? If you had more time, what would be next?

Building the Happy Thoughts project went pretty good, I started writing all the code in the App component and then devided things to different components. I didn't encounter any big problems but I am uncertain about how to think when deviding code in different components. I instinctly want to move functions to the components where they are being used, I feel that that makes the code more clean and readable. But I have noticed that this is causing trouble sometimes. As an example, I wanted to do a new GET fetch inside the POST fetch, but the fetches were in different components and not related to each other in a way that I could pass the fetch over as props. To handle this I made a copy of the function inside the other component, which I'm sure is not a good way to do it. 

All and all I'm pleased with the project I've built but I know I could have made a lot more with it if I had dedicated more time to it this week. For instance I wanted to make error messages related to the validation in the form input. I would have also wanted to research how to keep track of the specific users likes on posts and implement that.

## View it live

You can see my project live at https://frosty-heyrovsky-0bfc89.netlify.app/
