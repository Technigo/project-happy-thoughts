# Happy Thoughts

Assignment was to create a twitter clone where user can post "thoughts", read other thoughts, and like thoughts.

## The problem

Was a bit tricky to get sorted out where state should be. In the end I moved most of it to app.js.
- both GET and POST are used for the API
- useEffect to control when updates are being made to the API
- using local storage to preserve which thoughts have been liked.
- ended up building separate component for message card since I thought it was easier to manage in that way

## View it live

https://olof-happythoughts.netlify.app/