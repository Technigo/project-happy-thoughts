
/* This Component is used to fetch happy thought API with 
1) existing list of thoughts 
2) likes counts
3) get timestamp  */

const PostList = ({ posts, loading, handleLiked }) => {
    //p tag is returned if loading is true 
    if (loading) {
        return <p className='loading'>loading...</p>
    }

    return ( 
        <section className='all-post'>
            {posts.map((post) => {
                return (
                    <div className='single-post' key={post._id}>
                        <h4>{post.message}</h4>
                        <div className='like-details'>
                            <button 
                            type='button'
                            className='heartBtn'
                            onClick={() => {handleLiked(post._id)}}
                            style={{
                                background: post.hearts >= 1 ? '#e79898bd' : '#f2f2f2',
                              }}> ❤️ </button>
                            <p>x {post.hearts}</p>

                            <div className='timestamp'>
                            <p className="date">{formatDistance(new Date(post.createdAt), Date.now(), { addSuffix: true })} </p>
                            </div>
                        </div>
                    </div>     
                )
            })}
        </section>
     );
}
 
export default PostList;