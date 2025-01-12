import React, { useState, useEffect, useCallback } from 'react';
import PostCard from '../../components/postCard/PostCard';
import './PostPage.css';
import Comment from '../../components/comments/Comment';
import db from '../../utils/db.json';

function PostPage({ match }) {
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPost = useCallback((id) => {
    // Here, 'db.posts[id]' might be risky if 'id' doesn't match array index exactly
    // An alternative: find the post by post.id === parseInt(id)
    const foundPost = db.posts.find((p) => p.id === parseInt(id));
    if (foundPost) {
      setPost(foundPost);
    }
  }, []);

  const fetchComments = useCallback((id) => {
    const data = db.comments.filter(
      (comment) => parseInt(comment.postId) === parseInt(id)
    );
    setComments(data);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchPost(match.params.postId);
  }, [fetchPost, match.params.postId]);

  useEffect(() => {
    fetchComments(match.params.postId);
  }, [fetchComments, match.params.postId]);

  return (
    <div>
      {post.title === undefined ? (
        <h1>Loading...</h1>
      ) : (
        <PostCard
          title={post.title}
          authorId={post.authorId}
          date={post.datePublished}
          numLikes={post.numLikes}
          description={post.description}
        />
      )}

      <h4 className="mt-4 text-center">Comments</h4>
      <div className="comment-box d-flex justify-content-center">
        <ul className="list-unstyled m-4">
          {loading ? (
            <h1>Loading...</h1>
          ) : comments.length === 0 ? (
            <h1>No comments</h1>
          ) : (
            comments.map((comment) => <Comment key={comment.id} data={comment} />)
          )}
        </ul>
      </div>
    </div>
  );
}

export default PostPage;
