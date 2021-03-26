# Happy Thoughts

The project "Happy Thoughts" is amed at practice React state skills by fetching and posting data to an API.

## The problem

- Follow the provided design
- Publihs the most recent thoughts at the top and older thoughts at the bottom of the page
- The thoughts should show the content of the message and how many likes they've received
- Have a form to post new thoughts
- Implement the heart button to send likes on a thought


# Stretch goal requirements included 
- Show a count below the form input that updates as the user types and shows how many characters are remaining.
- When POSTing a new thought, if the message was empty, too long, or too short, you get an error message back from the API. Use this to set some sort of error state to show a friendly message to your user. (Hint: Use the network tab of the developer tools in your browser)
- Handle loading states
- Keep count of how many different posts you have liked (different from how many times a post has been liked). Keep count and display it in some way.
- Store this number in localStorage so that when the page is reloaded, the initial state can be set from the number you've stored.

To implement the project I used two react hooks types useState and useEffect. The data was received from the API using the fetch() method.  

## View it live

See the project live: https://happy-thoughts-klimenko.netlify.app
