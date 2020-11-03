# Happy Thoughts

The project was to focus on the practice of useing API to do GET and POST request and use React.js functionality like useState and useEffect hooks to update and handle the data. The end product is a Happy-thoughts (messages) app where you can post a thought and see a list of the latest 20 thoughts thats been added to the API.
The design was to follow a sketch provided in the project brief.


## The problem
The page should follow the design as closely as possible
It should list the most recent thoughts at the top and older thoughts at the bottom (sorted).
The messages should show the content of the message and how many likes they've received, and there should be a form to post new messages.
And there should a heart button implement to send likes for a message. I found this to be the hardest part to implement.

The challenge was to structure components and their responsibility. The state. The listing of the messages which are already in the API. Building a form to post a new message and then implement the heart button on an existing message. I aimed to have have the mor complex parts like fetches in the App.js and make a component for input messegaes and one for the list of messages that also includet the heart button implement to send likes for a message. I put the css in one file and commented out what parts of the css related to each component.

If I had more time I would have add some animations/transitions to the button and like-heart, stucture in components and in a more DRY-way. Added a footer component and mabye a header as well!

## View it live

https://suspicious-torvalds-420c3d.netlify.app/
