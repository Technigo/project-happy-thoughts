const NewPost = ({ handlePostSubmit, onNewPostChange, newPost, textarea }) => {
    return ( 
        <form onSubmit={handlePostSubmit}>
            <h3>What&#39;s making you happy right now?</h3>
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
            <p className='warning'>{140 - newPost.length} characters left</p>
            <button className='send-btn' type='submit'>❤️ Send Happy Thoughts ❤️</button>
        </form>
     );
}
 
export default NewPost; 

