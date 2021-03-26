# Happy Thinking

**Mission:** 

*Create an application that uses React states and hooks to fetch data from Happy-Thoughts API*

**Requirements:**
- 🔵 COMPLETE (all)
- 🔴 COMPLETE (all)
- ⚫ Partial


***

## Installation

Navigate to the project folder and run the following command

```
$ cd code 
$ npm install
```

This app has been generated using `create-react-app`.
> This app uses the following npm packages that are not included in the `create-react-app`:
> * [moment](https://www.npmjs.com/package/moment)
> * [styled-components](https://www.npmjs.com/package/styled-components)

**To start the project**

```
$ cd code 
$ npm start
```


## 🗝️ Key Moments 🗝️
***
### Setting up with styled-components
So for this project I wanted to try my hands on `styled-components`. I did some research into how I should structure the project and apply the styled-components. I found that this (see below) was most suited for this project.
<br>

#### **Folder structure**  

```md
components
|--- ReactComponent1 *(with no unique style)*
      |--- index.js
|--- ReactComponent2 *(with unique style)*
      |--- index.js
      |--- style.js
|--- Styled
      |--- StyledComponent1.js
      |--- StyledComponent2.js
helpers
|--- any .js files that contains functions/variables that are considered extra help
```
* The `index.js` files all contain pure React components.
* If the component requires additional styles (aside from that provided by the styled components) we use the `style.js` file in the components folder
* The `Styled` folder contains all styled components that can and will be reused by a React component. 

> 👉 Now, I don't know if this is best practice to structure it like this. I also think it depends on the project and team you are in. But nontheless this was good practice for me.

******

### Trying to write a custom hook
At first I created the api-call functions all within the `App.js` component. However I did not like how it looked with the `App.js` file being overcrowded by that logic. So I did some research into how I could solve that. 

One way was apparently to create a custom hook called `useAPI`. Alot of people online had already done this, and there also is an npm package that does it for you. However I knew that if I was going to use something like that I would want to do it myself (so I could really learn).

But after **alot** of fiddling I got issues with callbacks and it seemed the custom hook would only work if I used `axios`. Since this project is only week 11, I felt it was a bit too soon for me to start adding lots of new libraries. 

While I did learn how to implement a custom `useAPI` hook, it is not present in this final project. 

***

### Moving the api calls
In light of my decision to not use a custom hook, I just moved the function for posting a new thought and liking a thought to the component that the user actually interacts with.

The `Form` component recieved the **postNewThought** function (since it contains a submit button, it should handle that action)

The `Thought` component recieved the **postNewLike** function (since it contains the like button, and already handles *hearts* and has direct access to its own id)

<br>

***

## 💭 Reflections 💭
This project was really fun to work with. I LOVE ❤️ when we get pre-made designs to work on. It takes so much time to create your own design, so getting a pre-made one is great for time-management (and also simulate how it is to work with designers).

However, no project is without struggle (see below)...

<br>

Issues that came up:
- I had some issue with trying to decide what **React** feature to use in-order to solve the problem at hand. There are so many ways to solve something (in any programming language), and that can sometimes overwhelm a junior-developer who does not know what path comes with least resistance. But, then again you always learn something on those difficult paths...
-  Like I mentioned in my "Key moment" of trying to create a custom hook; I had severe issues with callbacks and managing those when using `fetch()` and the `then()` system. The struggle did result in me accidentally posting 100s of likes in mere seconds, and the simple GET request got stuck on an endless loop. It was a scary moment to witness... But I solved it by not using the custom hooks and just focusing on `useEffect` and its conditional callback.

If I were to continue on this project / start over I would:
- Work a bit more on error-handling and structure on when to fetch new data or not. 
- Maybe try to work with React Context (from which I saw a teammate use in this project to communicate states to children)

<br>

***

## View it live

https://happythinking.netlify.app
