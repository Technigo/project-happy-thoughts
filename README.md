# Happy Thoughts built with React 💭

In this project I use React useState and useEffect hooks to fetch and post data to an API. I have build my own simpler version of Twitter which gives you possibility to post messages and like them.

## In this project, you will find:

- How to use APIs in React, firing requests within `useEffect`.
- How to put the result of API responses into React state to show in the page.
- What it's like to work with an API which you both send and receive data from.

## Tools/ techniques, approach and planning 🔨

I used the following API:
`GET https://technigo-thoughts.herokuapp.com/`

This API returns the latest 20 thoughts from the API.

I used functional React to build this project. The project is divided into multiple Components (NewMessages, ButtonMessages and Hearts) If I had more time, I would definitely re-think how I structured those and re-build them.
Additionally, I would add localStorage to track how many times the single user clicked the like button.

## Deployed version 🚀

https://happy-thoughts-of-aleksandra.netlify.com/
