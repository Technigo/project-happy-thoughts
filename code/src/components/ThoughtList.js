import React from 'react'
import moment from 'moment'

const ThoughtList = ({loading, thoughtList}) => {
    // const [thoughtList, setThoughtList] = useState([])
    // const [loading, setLoading] =useState(false)
    
    // useEffect(() => {
    // fetchThoughts();
    // }, []);
         
    //      const fetchThoughts = () => {
    //          setLoading(true)
    //          fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
    //          .then((res) => res.json())
    //          .then((data) => setThoughtList(data))
    //          .finally (() => setLoading(false))
    //      }
    //      console.log(thoughtList)

         if (loading){
             return <h1>Loading in progress...</h1>
         }

         return (
             <section>
                 {thoughtList.map((singleThought) => (
                     <div key={singleThought._id}>
                         <h3>{singleThought.message}</h3>
                         <p>{moment.utc(singleThought.createdAt).fromNow()}</p>
                     </div>
                 ))}
             </section>
         )
     }
 
 export default ThoughtList
 