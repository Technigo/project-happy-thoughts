import { useState, useEffect } from "react";
import NewPost from './NewPost'; 

//this container include new input area (form), as well as the list of posts 
//this Component is used to 1) fetch happy thoughts API, 2) manage send POST for likes

const PostContainer = () => {
    const likes = (likesID) => `https://happy-thoughts-technigo.herokuapp.com/thoughts/${likesID}/like`; 
    
    const [newPost, setNewPost] = useState(''); //store new posts value 
    const [loading, setLoading] = useState(false);
    const [thoughtList, setThoughtList] = useState ([]); //store existing and new posts

    /* creating a function here to 
    1)set the loading variable to true, 
    2)fetch thoughts API convert to json file, 
    3)set thoughtList to it's value, 
    4)set loading value to false if everything went well  */
    const fetchPosts = () =>{
        setLoading(true);
        fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
        .then(res => res.json())
        .then(data => setThoughtList(data))
        .catch(error => console.error(error))
        .finally(() => setLoading(false));
    }
    
    //use useEffect to call fetchPost function when this Component mounts(created and inserted) to the DOM
    useEffect (() => {
        fetchPosts();
    },[]);
    
    const handlePostSubmit = (event) =>{
        event.preventDefault();

        
    }

    return ( 
        <div className="posts-container">
            <NewPost 
            newPost={newPost}
            handlePostSubmit={handlePostSubmit}
            onNewPostChange={onNewPostChange}
             />

            <ThoughtList 
            loading={loading}
            thoughtList={thoughtList}
            />
        </div>
     );
}
 
export default PostContainer; 