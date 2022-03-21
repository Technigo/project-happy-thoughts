import React, {useState, useEffect} from 'react'

const taskAPI = 'https://week11backend.herokuapp.com/tasks';

const TaskList = () => {
	const [taskList, setTaskList] = useState([]);
	const [loading, setLoading] = useState(false);
	// const [secondTaskList, setSecondTaskList] = useState([]);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = () => {
        setLoading(true)
        fetch(taskAPI)
            .then((res) => res.json())
            .then((json) => setTaskList(json))
            .finally(() => setLoading(false))
    }
    console.log(taskList)

    const updateState = () => {
        setTaskList([...taskList, 'another element'])
    }

    if (loading) {
        return <p>Loading...</p>
    }

    return (
        <div>
            {taskList.map((item) => (
                <article key={item._id}>
                    <h4>{item.description}</h4>
                    <label htmlFor={item.description}>Finished: </label>
                    <input id={item.description} type='checkbox'/>
                    <p>{new Date(item.date).toLocaleDateString()}</p>
                </article>
            ))}
        </div>
    )
    

	
};

export default TaskList;
