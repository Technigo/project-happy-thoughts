import React, {useState, useEffect} from 'react'

const CodeAlong = () => {
    const [taskList, setTaskList] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(
        () => { 
    fetchTasks() },
    [])

    const fetchTasks = () => {
        setLoading(true)
        fetch('#')  
          .then((res) => res.json())
          .then((data) => setTaskList(data))
          .finally(() => setLoading(false))
        }

     if (loading) {
         <p>Loading data...</p>
     }

    // useEffect(
    //     () => { console.log('Component got updated')},
    //     [taskList]
    // )

    //     const updateState = () => {
    //         setTaskList([...taskList, 'another element'])
    //     }

 return (
     <div>
         Here is a tasklist
         {taskList.map((singleTask) => (
             <article>
                 <h4>{singleTask.description}</h4>
                 <input type="checkbox" value={singleTask.isChecked}/>
             </article>
         ))}
         {/* <button onClick={updateState}>Update state</button> */}
     </div>
 )

}

export default CodeAlong