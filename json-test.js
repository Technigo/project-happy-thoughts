const fs = require("fs")

const testArray = 
[
    {
        title: "Title one!",
        description: "This is a cool bajs"
    },
    {
        title: "Title Two!",
        description: "This is a chill bajs"
    },
    {
        title: "Title Three!",
        description: "Jag skulle bara fisa"
    },
]

fs.writeFileSync("test.json", JSON.stringify(testArray))

console.log(JSON.stringify(testArray))