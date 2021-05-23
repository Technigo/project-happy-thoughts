# Happy Thoughts

In this project I built a website where you can post your happy thoughts and see others happy thoughts! The project was built in week 11 of the Technigo bootcamp and updated with some new content and functionality in week 19.

## The project

This project was started when React was still pretty new to me. Initially I wrote all the content and functionality in App.js and then divided it to four components: Header, ListMessages, PostMessage and LikePost. The application was posting to and getting from an API set up by the Technigo team.

In week 19 of the Technigo bootcamp I created my own API and mongo database for the Happy Thoughts project and decided to go through the frontend project again to improve the code and add some functionalites. 
I added functionality for the user to also include their name and a hashtag with the happy thought and the API now also offers endpoints for getting thoughts by a specific hashtag or user. When clicking on a name or a hashtag on a thought in the list, the app is sending a new get request for that specific name or hashtag, and the API returns all results that match.

Another new feature in the app is the emoji picker from emoji-mart that I have implemented in the form, use the picker to insert some happy emojis to your thought. The picker is hidden by default, to show it click the button with the 🤩 emoji, to hide it click the same button.

Other changes I've made to the app is devided the functionality into more components, adjusted some styling and exchanged some html tags into some more semantic ones. Continuing the work on a project made earlier in the bootcamp was really fun and rewarding, it really gave some perspective on the progress I've made since and it shed some light on the things I'm able to do with code now, that I wasn't at that point.

## View it live

You can check out my project live at https://sandras-happythoughts.netlify.app/
