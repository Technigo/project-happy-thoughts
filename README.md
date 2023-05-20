# Happy Thoughts

The goals for this project was to create a feed of positive thoughts by both getting and posting information to an API.  The text-input at the top provides the information to be posted to the API.  The feed below shows the most recent 20 Happy Thoughts. In this project I continued to practice using components and useState while also incorporating the useEffect Hook.

## The problem

Oddly (for me), I started this project by styling a static input box and a single, static thought/feed box. I realized while working on the example project that trying to read un-styled API responses in a list was a struggle.  So, I thought if I did a bit of simple styling first, the more technical bits would be easier to see (and understand if something went wrong). Once I had the beginnings of styling completed, I got the GET/fetch request to work and populate a list of Happy Thoughts from the API.  Then I worked on the POST/fetch request to post thoughts from my own text input.  Then, I worked on getting the Heart/Like button to work.  This was a little trickier.  I started with only one Button component that was largely styled by passing props. The further I got into working on the Heart/Like button, I realized I would need separate components for the Submit Thought button and the Heart/Like button so that I could include a POST/fetch request to the Heart/Like button. This also allowed me to add different styling and functionality - like the confetti surprise - to just the Heart/Like button. I finished by adding the time stamp, character counter, like counter, API error based alert, and button confetti. I referred to StackOverflow to figure out how to add the API-error alert.  And, I referred to previous students' code to help understand how to format the timestamp.  I worked quite a while to add animation to the page that would show when a new Thought was added. But, wasn't succesful.  If I had more time, I would finish adding this animation .  

Updated 18/5/2023 with the project-happy-thoughts-api: I have updated this project with my own API.  You can find links to the information for that API below.

## View it live

Deployed frontend: https://radiant-chebakia-9e66b6.netlify.app/

GitHub repo for API: https://github.com/beemailley/project-happy-thoughts-api

Deployed API: https://project-happy-thoughts-api-3l2qjuyada-lz.a.run.app/
