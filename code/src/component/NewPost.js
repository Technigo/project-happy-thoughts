const NewPost = ({ handlePostSubmit, onNewPostChange, newPost, textarea }) => {
    return ( 
        <form onSubmit={handlePostSubmit}>
            <h2>What&#39;s making you happy now?</h2>
            <textarea 
            onChange={onNewPostChange}
            value={newPost}
            name='newInput'
            id='newInput'
            cols='30'
            rows='10'
            required
            maxLength='140'
            > 
            </textarea>
            <p className='warning'>140 - {newPost.length} characters left</p>
            <button type='submit'>❤️ Send Happy Thoughts ❤️</button>
        </form>
     );
}
 
export default NewPost; 

