import React, { useState, useEffect, useCallback } from 'react';
import './profile.css';
import db from '../../utils/db.json';
import AuthorCard from '../../components/AuthorCard/AuthorCard';
import FilterHeader from '../../components/FilterHeader/FilterHeader';
import UserPostList from '../../components/UserPostsList/UserPostList';

function Profile({ match }) {
  const [posts, setPosts] = useState([]);
  const [author, setAuthor] = useState({});
  const [activeButton, setActiveButton] = useState('');

  // Fetch the posts written by a particular author
  const fetchPost = useCallback((id) => {
    const filteredPosts = db.posts.filter((post) => post.authorId === parseInt(id));
    setPosts(filteredPosts);
  }, []);

  // Fetch author details
  const fetchUser = useCallback((id) => {
    const user = db.authors[id];
    if (user) {
      setAuthor(user);
    }
  }, []);

  useEffect(() => {
    fetchPost(match.params.authorId);
  }, [fetchPost, match.params.authorId]);

  useEffect(() => {
    fetchUser(match.params.authorId);
  }, [fetchUser, match.params.authorId]);

  // Bubble sort by ascending date
  const ascDate = useCallback(() => {
    setActiveButton('ascDate');
    const data = [...posts];
    // Bubble sort for sorting time complexity = O(n^2)
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data.length - i - 1; j++) {
        if (data[j].datePublished > data[j + 1].datePublished) {
          [data[j], data[j + 1]] = [data[j + 1], data[j]];
        }
      }
    }
    setPosts(data);
  }, [posts]);

  // Bubble sort by descending date
  const dscDate = useCallback(() => {
    setActiveButton('dscDate');
    const data = [...posts];
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data.length - i - 1; j++) {
        if (data[j].datePublished > data[j + 1].datePublished) {
          [data[j], data[j + 1]] = [data[j + 1], data[j]];
        }
      }
    }
    data.reverse();
    setPosts(data);
  }, [posts]);

  // Bubble sort by ascending likes
  const ascLike = useCallback(() => {
    setActiveButton('ascLike');
    const data = [...posts];
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data.length - i - 1; j++) {
        if (data[j].numLikes > data[j + 1].numLikes) {
          [data[j], data[j + 1]] = [data[j + 1], data[j]];
        }
      }
    }
    setPosts(data);
  }, [posts]);

  // Bubble sort by descending likes
  const dscLike = useCallback(() => {
    setActiveButton('dscLike');
    const data = [...posts];
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data.length - i - 1; j++) {
        if (data[j].numLikes > data[j + 1].numLikes) {
          [data[j], data[j + 1]] = [data[j + 1], data[j]];
        }
      }
    }
    data.reverse();
    setPosts(data);
  }, [posts]);

  return (
    <div>
      {/* Author Details */}
      <AuthorCard author={author} />

      <div className="container">
        <h3 className="pt-4 pl-4 pb-3">Posts</h3>
        
        {/* Filter Header */}
        <FilterHeader
          activeButton={activeButton}
          ascDate={ascDate}
          dscDate={dscDate}
          ascLike={ascLike}
          dscLike={dscLike}
        />

        <UserPostList posts={posts} />
      </div>
    </div>
  );
}

export default Profile;
