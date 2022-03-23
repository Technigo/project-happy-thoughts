import React, {useState, useEffect} from 'react'

export const ThoughtsList = () => {

  const [list, setList] = useState([])
  const [loading,setLoading] = useState(false)


    useEffect(() => {
        fetchList()

       return () => {
           console.log('I will be mounted')
       }
    
    }, [list])

     const fetchList = () => { 
         setLoading(true)
        console.log('use effect ran')
        fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
        .then(res => res.json())
        .then(data =>  setList(data))
        .catch(error => console.error(error))
        .finally(() => setLoading(false)) 
    
        }
        if (loading) {
            return <h1>Loading in progress....</h1>
        }
        
    return (
        <section>
           {list.map(thoughts => (
               < div key={thoughts._id}>
                   <h4>{thoughts.message}</h4>
                   <input type= "checkbox" checked={thoughts.isChecked} />
                   <p>{(thoughts.createdAt, new Date())}</p>
                   </div>
           ))}
        </section>
    )
}