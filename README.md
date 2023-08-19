# Happy Thoughts

Happy Thoughts, a microblogging platform designed to capture and share your fleeting moments of joy and inspiration. For the backend I crafted a simple Express API to save new objects in my MongoDB database. 

Components:

The NewThoughts component handles the form input and manages the onLikesIncrease functionality.
The ThoughtList component renders a list of thoughts passed in as props.
The loading state within ThoughtList displays a loading message while fetching data.
The onLikesIncrease function is invoked when users click the heart button to increase the heart count for a specific thought.

##  Future Enhancements

Things id like to improve the site (and intend to fix later on) is:

1. Improving submit Button Logic like prevent the submit button from being clickable until users have entered a minimum character count in the input field.
2. Alerts for insufficient input: If users attempt to submit a thought with less than 5 characters, I want to display an alert message.
3. Refined Like-button Animation: Optimize the animation behavior of the like buttons so that only the clicked heart exhibits animation. Currently, all hearts animate when any heart is clicked. I want to fix this so that only the clicked heart animates.
4. Accessibility Improvements: To enhance accessibility, I plan to introduce labels and employ more semantic code syntax to ensure compatibility with screen readers. I also want to add a skip to content link to allow users to skip the navigation and jump directly to the main content. 

## Backend integration

 The backend can be run locally or using server deployed on Render. 
 
Deployed: https://happy-thoughts-express-api.onrender.com/

Github repo: https://github.com/annikalindberg/project-happy-thoughts-api

## View it live
The frontend deployed page: https://sweet-unicorn-99f547.netlify.app/

