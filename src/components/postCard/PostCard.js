import React, { useState, useEffect, useCallback } from 'react';
import './PostPage.css';
import db from '../../utils/db.json';

function PostCard({ title, authorId, description, date, numLikes }) {
  const [authorName, setAuthorName] = useState('');

  const fetchData = useCallback(() => {
    const user = db.authors[authorId];
    if (user) {
      setAuthorName(`${user.firstName} ${user.lastName}`);
    }
  }, [authorId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="card w-100">
      <h1>{title}</h1>
      <div className="p-5">
        <div className="mainContent mx-auto">{description}</div>
      </div>
      <p className="title text-secondary">
        Date: {new Date(date).toLocaleDateString()}
      </p>
      <p>Author: {authorName}</p>
      <p>Likes: {numLikes}</p>
    </div>
  );
}

export default PostCard;
