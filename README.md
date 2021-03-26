# Happy Thoughts

Modern React app to share your thoughts with your friends.

## Technologies

- React (modern lovely hooks)
- Styled-Components (to dress it up)
- React context (easy state management)
- momentjs (Who likes to work with directly dates!)

## Project structure

```
├── public
└── src
    ├── api
    ├── assets
    │   └── styles
    └── components
        ├── FormContext
        ├── MessageList
        ├── MessageListItem
        └── NewMessageForm
```

`public`: Contains public files such as `index.html` <br>
`src`: Whole application source code. <br>
`api`: All api endpoints . <br>
`assets`: Holds global/shared styles. If there is any images or static file, it should be added here. <br>
`components`: All react components. <br>
`FormContext`: Apps only context which is responsible for holding the thought list. <br>
`MessageList`: Component for showing messages list. <br>
`MessageListItem`: Component for each message item. <br>
`NewMessageForm`: New Message form which contains an input to type and a submit button. <br>

## Up & Running

1. Clone the project (unless you can run the code inside your head)
2. Open up `code` directory.
3. `npm install` to install packages.
4. `npm start` to run the project.

## View it live

This is the deployed version on Netlify:<br>
https://angry-fermi-1f9eb6.netlify.app
