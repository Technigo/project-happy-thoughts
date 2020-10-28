import React from 'react';

import moment from 'moment';
import PostLiked from './PostLiked';

const PostList = ({ postList }) => {
	return (
		<>
			{postList.map(post => (
				<article className="post" key={post._id}>
					<p className="post-text">{post.message}</p>
					<PostLiked hearts={post.hearts} id={post._id} />
					<p className="post-text-posted">{moment(post.createdAt).fromNow()}</p>
				</article>
			))}
		</>
	);
};

export default PostList;
