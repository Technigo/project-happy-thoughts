const NewPost = ({ handlePostSubmit, onNewPostChange, newPost}) => {
    return ( 
        <form onSubmit={handlePostSubmit}>
            <h2>What&#39;s making you happy now?</h2>
            <textarea 
            onChange={onNewPostChange}
            value={newPost}
            name='newInput'
            id='newInput'
            cols='30'
            rows='10'></textarea>
            <button type='submit'>❤️ Send Happy Thoughts ❤️</button>
        </form>
     );
}
 
export default NewPost; 

