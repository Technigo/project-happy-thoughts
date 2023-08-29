# Happy Thoughts

I have created a Twitter-like feed where a user can write a ‘happy thought’ which is then displayed along with other recent happy thoughts from an API. The thoughts are listed with the most recent at the top and older ones at the bottom, with a timestamp on when they were written. Anyone can then see the thought, click on a ‘like’ button if they like it, and see how many likes the thought has received. I had to follow a design closely. As one of my stretch goals I also added a count below the form input which updates as the user types and shows how many characters are remaining. The count goes red if the user types under five characters or over 140. 

## The problem

I began by using the Example Project to help me understand how to write the code, which components I would need, and how to fetch and post the thoughts using the APIs. I also thought about which useState hooks I would need and which useEffect hook I would need to use. My first task was to fetch the recent thoughts, then create a thought using a POST request. After that I worked on the Heart (like) button. There were a lot of different elements to this week’s task and I needed help with some challenges I faced. I am pleased I managed to add a stretch goal in the end and if I had more time I would add another stretch goal, such as work on getting an error message back from the API if the message is empty, too long or too short. 

## View it live

https://fiona-klacar-project-happy-thoughts.netlify.app/