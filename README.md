# Week 11 - Technigo Bootcamp

# Happy Thoughts  ❤️

The goal of this porject was to build a "Twitter" kind app using React hooks (useState and useEffect) by posting and receiving data from an API.
Thanks to it everything became much more clear what component lifecycle means, how to use useEffect hook in React to perform actions when components mount, unmount, or when state changes. It was really exciting to work with back-end for the very first time to play with errors and POST method. Moreover, it was a nice training by calling an API to put different kind of data into states and I hope we will continue training with it because I feel we need loots of practice to fully grasp it.


## The problem

I managed to reach the blue level quite fast. It took a while to figure out the path to error messages, but then I found them on Network tab in the developer tools and tried different ways to display it, but in the end I managed to do it by comparing what I received from the Network tab and changing the state of error message thanks to if/else statement. It was much harder to figure out how to display amount of times user liked different thoughts and it actually helped to create another component for one thought and mount it in ThoughtsList that I initially created. So then I clearly noticed that I can create a state variable clicks there and a new function onIncreaseClicks with changed state of clicks and my initial function onLikeSubmit(id) from App.js.
I am very happy about this project and the animation I implemented. 

## View it live

https://my-happy-happy-thoughts.netlify.app/ 
