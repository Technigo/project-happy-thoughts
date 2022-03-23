import React, {useState, useEffect} from 'react'

const ThoughtList = () => {
    const [thoughtList, setThoughtList] = useState([]);
    
    useEffect(() => {
    fetchThoughts();
    }, []);
         
         const fetchThoughts = () => {
             fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
             .then((res) => res.json())
             .then((data) => setThoughtList(data))
         }
         console.log(thoughtList)

         return (
             <section>
                 {thoughtList.map((singleThought) => (
                     <ul key={singleThought._id}>
                         {singleThought.message}
                     </ul>
                 ))}
             </section>
         )
 
     }
 
 export default ThoughtList
 