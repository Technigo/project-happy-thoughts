# Happy Thoughts

The purpose of this week was to create our own version of Twitter, fetching messages from an API, posting new messages and liking posts.

This project made me practice the use of APIs in React, useEffect and useState.  

## The problem

I first created all components I needed and designed them following the brief and using the mobile first approach. When the skeletton was in place, I created a fetch to  get the 20 most recent thoughts. Then I created a fetch to post a new thought ot the API from the input component. Finally, I even created a POST fetch to like a thought by clickin on its heart button.

In addition to the minimum requirements, I added a character counter under the message input and I put some validation to disable the send button if the message was too sort or too long.

The page is responsive and has been tested with good results in different browsers (Chrome, Firefox, Edge and Safari) and with ChromeVox Classic Extension.

If I had more time, I would have used the error message coming back from the API in my code and worked with local storage.

## View it live

You can take a look at the result on https://happytweets.netlify.app/
You are welcome to visit my pull request https://github.com/Technigo/project-happy-thoughts/pull/124 and leave some comments about my code.
Enjoy!
