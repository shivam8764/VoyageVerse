import React, { memo } from 'react';
import Post from '../ShortPost/ShortPost';

function UserPostList({ posts }) {
  return (
    <ul className="list-group">
      {posts.length === 0 ? (
        <h1 className="text-center">Loading...</h1>
      ) : (
        posts.map((post) => (
          <Post
            key={post.id}
            title={post.title}
            likes={post.numLikes}        // Renamed prop to "likes" for clarity
            date={post.datePublished}
            id={post.id}
          />
        ))
      )}
    </ul>
  );
}

export default memo(UserPostList);
