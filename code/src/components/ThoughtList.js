import React from "react"
import "./thoughtList.css"
import moment from "moment"
// import { HeartButton } from "./HeartButton";
// import { MyThought } from "./MyThought"


export const ThoughtList = props => {
    

    const { message, hearts, createdAt } = props.thought

    return (
        <article className="thought-card">
            <div className="message">
                {message}
            </div>

            <div className="card-bottom">
                <div className="like-btn">
                    {/* <HeartButton id={thought._id} heartSubmit={() => heartSubmit(thought._id)} /> */}
                    <span> x {hearts} </span>
                </div>

                <div className="elapsed-time">
                    <span>{moment(createdAt).fromNow()}</span>
                </div>
            </div>
        </article>
    )
}

    //     const [thoughts, setThoughts] = useState([])


    //     const heartSubmit = (id) => {
    //         console.log(id);

    //         let newThoughts = thoughts.map(thought => {

    //             if (thought._id === id) {
    //                 thought.hearts++;
    //                 // console.log(thought.hearts)

    //                 fetch(`https://technigo-thoughts.herokuapp.com/${thought._id}/like`, { method: 'POST', body: thought.hearts })

    //             }
    //             return thought;

    //         })

    //         // console.log(newThoughts);

    //         setThoughts(newThoughts);
//}//


//     useEffect(() => {
//         fetch("https://technigo-thoughts.herokuapp.com/", {
//             method: "GET",
//         })
//             .then(res => res.json())
//             .then(json => { setThoughts(json) })
//             .catch(error => console.error("Error:", error))
//     }, []);

//     console.log(thoughts);



// return (

//     <div>
//         <MyThought></MyThought>

//         {thoughts.map((thought) => {

//             let now = new Date()
//             let thoughtTime = new Date(thought.createdAt)
//             let elapsedTime = Math.round(((now.getTime() - thoughtTime.getTime()) / 1000))




//         })}



//     </div >



// )

