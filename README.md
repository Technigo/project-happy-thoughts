# Happy Thoughts

Page rendering messages from API. User is able to type their own message in the input field and have it sent to the API for re-rendering and display of the message on the page.

## The problem
Using API calls inside useEffect hooks. Requires understanding of useEffect and React lifecycle. Also requires knowledge of fetch and promises. I used async/await as an alternative to fetch with .then due to finding it more concise.

Started with fetching and displaying the data from the provided API endpoint, then dividing into components (Form and messageDisplay). Inside each component, use fetch to post data to API through event listeners. Added conditional rendering detail for like-buttons, 0 likes displaying grey, > 0 displaying pink. Used npm package date-fns to generate difference in current time and posted time, in order to display how long ago the message was sent.

Next would be to look into whether it is possible to use mulitple useEffects instead since it is the preferred format according to reactJS documentation.

## Link to project:
https://aquamarine-praline-88ba8a.netlify.app 