# Happy Thoughts

The assignment was to build a website where people can write and send a post and read other people's posts. Like a simpler version of twitter. There should also be a function where the user can like previous posts. The amount of likes and when the post was sent should also be displayed on the website.

## The problem

This week we used React with useState and useEffect. We were given API:s that we could fetch from, and I used these to fetch previous posts and likes in the website.

I started with creating components and did fetching, mapping and neccessary sections and functions (such as a form for the user to post with) in these. Then I moved most of the code into a 'container'-component, since I wanted to have a clean 'App.js'. I passed information via the components and created the eventhandlers for the buttons and the form.

I rendered my components inside 'container.js' and then rendered 'container.js' in 'App.js'. Then I proceeded with the styling part which was done entirely in a separat css-file.

If I had more time I would look over the styling a bit more. I would also do a nicer looking custom loading message and some custom made alerts for the user when they type too short or too long message.

## View it live

https://spring2022-happy-tweets.netlify.app/
