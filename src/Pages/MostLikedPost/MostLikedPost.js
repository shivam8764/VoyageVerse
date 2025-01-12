import React, { useState, useEffect, useMemo, useCallback } from 'react';
import Post from '../../components/ShortPost/ShortPost';
import db from '../../utils/db.json';

function MostLikedPost() {
  // Determine whether we're sorting by likes or comments based on the route
  const whichSort = useMemo(() => {
    const path = window.location.pathname.split('/')[1];
    return path === 'most-liked' ? 'numLikes' : 'numComments';
  }, []);

  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Quick sort helpers
  const swap = useCallback((items, leftIndex, rightIndex) => {
    const temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
  }, []);

  const partition = useCallback(
    (items, left, right) => {
      const pivot = items[Math.floor((right + left) / 2)];
      let i = left;
      let j = right;

      while (i <= j) {
        while (items[i][whichSort] < pivot[whichSort]) {
          i++;
        }
        while (items[j][whichSort] > pivot[whichSort]) {
          j--;
        }
        if (i <= j) {
          swap(items, i, j);
          i++;
          j--;
        }
      }
      return i;
    },
    [swap, whichSort]
  );

  const quickSort = useCallback(
    (items, left, right) => {
      if (items.length > 1) {
        const index = partition(items, left, right);
        if (left < index - 1) {
          quickSort(items, left, index - 1);
        }
        if (index < right) {
          quickSort(items, index, right);
        }
      }
      return items;
    },
    [partition]
  );

  const fetchPost = useCallback(() => {
    let data = [...db.posts];
    const sortedData = quickSort(data, 0, data.length - 1);
    // Reverse to get descending order, then slice top 10
    const finalData = sortedData.reverse().slice(0, 10);
    setPosts(finalData);
    setIsLoading(false);
  }, [quickSort]);

  useEffect(() => {
    fetchPost();
  }, [fetchPost, whichSort]);

  return (
    <div className="container">
      <ul className="list-group">
        {isLoading ? (
          <h1 className="text-center">Loading... Please Wait...</h1>
        ) : (
          posts.map((post) => (
            <Post
              key={post.id}
              title={post.title}
              like={post.numLikes}
              date={post.datePublished}
              id={post.id}
              comment={post.numComments}
              whichSort={whichSort}
            />
          ))
        )}
      </ul>
    </div>
  );
}

export default MostLikedPost;
