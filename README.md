# Happy Thoughts

In this week's project we practice React state skills by fetching and posting data to an API.

**What we needed to do**

✓ Page should follow the design as closely as possible
✓ List the most recent thoughts at the top and older thoughts at the bottom (sorted)
✓ Our thoughts should show the content of the message and how many likes they've received
✓ We should have a form to post new thoughts
✓ We should implement the heart button to send likes on a thought

## The problem

Biggest problems just adapting all the new stuff and things we have learned with JS and React...
This week I had time to do site for just mobile.  ...Or the resto of it works as weell but it doesn't look too good

This is how I sstructured the site:

	1	Parent: This is the main component that handles fetching thoughts, sending thoughts, and liking thoughts. It renders the SubmitForm and ThoughtCard components.
	2	ThoughtCard: This component takes in a list of thoughts and displays them. It shows the message, hearts (likes), and the time it was posted. It also has a button to like a thought.
	3	SubmitForm: This component handles the form for submitting new thoughts. It has validation to check if the entered text is too short (less than 5 characters).
	4	Footer: Simple footer with text and animation

CSS files for styling :
	1	ThoughtCard.css: This file contains the styles for the ThoughtCard component.
	2	SubmitForm.css: This file contains the styles for the SubmitForm component.
	3	index.css: This file contains the global styles for the application.

## View it live

My mobile site:

https://junior-science-lab.netlify.app
