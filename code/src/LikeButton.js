import React from 'react'

export const LikeButton = (props) => { 
 const handleClick = () => {
   fetch (`https://technigo-thoughts.herokuapp.com/${props.id}/like`, {
   method:"POST", 
  
   })
   .then (() => {
     props.onMessageLiked(props.id)
   })
  }
 
  return (
    <button onClick={handleClick}>
      <span role ="img">'❤️'</span></button>
  )
}
 
//  useEffect (() => {
//    fetch (handleClick)
//    .then(res => res.json ())
//    .then(json => setHearts(json))
//  }, [])

// return (
//   <div>
//    <button onClick={handleClick}>
//    <p>{props.hearts}❤️</p> </button> 
//   </div> 
// )
// }
// Funkade med hjärta men ej klickbar
// export const LikeButton = () => {
//   const handleClick ="https://technigo-thoughts.herokuapp.com/_id/like"
//   const [hearts,setHearts] = useState ([])

//    useEffect (() => {
//     fetch(handleClick)
//     .then(res => res.json())
//     .then(json => setHearts (json))
//     }, [])

// return (
//   <button
//   onClick={handleClick}>
//     ❤️
//   </button>
// )

// }




// 
//Funkade med att sätta hjärtat i varje genom att mounta den//

// export const Likebutton = (props) => {
//   const LIKE_URL="https://technigo-thoughts.herokuapp.com/${props.id}/like"
//   const [heart, setHearts] = useState = {count: 0}
  
//   const handleClick = () => {
//     fetch(`https://technigo-thoughts.herokuapp.com/${props.id}/like`, {
//       method: "POST", 
//       body: "", 
//       headers: { "Content-Type": "application/json" }
//     })

//   useEffect (() => {
//     fetch(LIKE_URL)
//     .then(res => res.json()
//     .then(json => setHearts(json))
//   )
//   }, [props])
//   return (
//         <button onClick={handleClick}>❤️ {this.state.count}</button>
//       )
//   }} 
