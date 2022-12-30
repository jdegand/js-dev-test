import React, { useEffect, useState } from 'react';
import Posts from './components/Posts/Posts';

import './App.css';

interface Post {
  author: {
    id: string;
    name: string;
  };
  body: string;
  id: string;
  publishedAt: string;
  title: string;
}

export function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:4000/posts');
        const data = await response.json();
        const sortedData = await data.sort(function (x: Post, y: Post) {
          const date1 = new Date(x.publishedAt);
          const date2 = new Date(y.publishedAt);
          return date2.getTime() - date1.getTime();
        });
        setPosts(sortedData);
      } catch (err) {
        setError('Something went wrong!');
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="App">
      {error && <div>{error}</div>}
      {posts && <Posts posts={posts} />}
    </div>
  );
}
