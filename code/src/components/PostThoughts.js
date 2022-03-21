import React from 'react'

useEffect(() => {
    fetchThoughts();
}, []);

// const fetchThoughts = () => {
//     setLoading(true)
//     fetch(`https://happy-thoughts-technigo-herokuapp.com/thoughts${id}/like`, {
//         method: 'POST',
//         headers: { 'Content-type': 'application/json' }
//     });
//         // .then((res) => res.json())
//         // .then((json) => setTaskList(json))
//         // .finally(() => setLoading(false))
// }
console.log(taskList)

const updateState = () => {
    setTaskList([...taskList, 'another element'])
}

export default PostThoughts;
