# Happy Thoughts

Create a site were you can read, send and like posts.
Update! I have now replaced the API with one created by me and the data is stored in a mongoDB.

## The problem

Started with planning the two components. Set up the first fetch of the API and focused on getting the list of data to show. After that trying to arrange the POST request, this was a bit tricker. But with help of this weeks example project, SO and previous students project it finally worked. Started using postman to be able to chech the API there, great to get an better overview on what's going on. But need more practice to use it's full potential.
For the likes I needed to match the id of the specific object and POST direct to that one. So similar to the POST for new message, but without a body for the message. It is really cool to get more insight in how everything is connected and being able to implement new things.
I still feel I need to strucuture my componenets in a better way, again I ended up with quite a lote of code in the App component. But it works so I'm happy for now. 
I'm still trying to wrap my head around how the useEffect works, but I'm very pleased I managed to use it for listening to the text input and based on that have different things happening. 

## View it live

[Happy thoughts project](https://happy-vibes.netlify.app)
[Link to API](https://project-happy-thoughts-api-c6cfxyvlgq-lz.a.run.app/)
