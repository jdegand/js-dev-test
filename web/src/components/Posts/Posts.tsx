import React, { useState } from 'react';
import Title from '../Title/Title';

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

interface PostProps {
  posts: Post[];
}

function Posts(props: PostProps) {
  const [searchedAuthor, setSearchedAuthor] = useState('');

  return (
    <div>
      {searchedAuthor
        ? props.posts
            .filter((post) => post.author.name === searchedAuthor)
            .map((post) => {
              return (
                <div key={post.id}>
                  <Title
                    title={post.title}
                    body={post.body}
                    searchedAuthor={searchedAuthor}
                  />
                  <h2>{post.author.name}</h2>
                  <h3>{new Date(post.publishedAt).toString()}</h3>
                  <button type="button" onClick={() => setSearchedAuthor('')}>
                    Go Back to Full List
                  </button>
                </div>
              );
            })
        : props.posts.map((post) => {
            return (
              <div key={post.id}>
                <Title
                  title={post.title}
                  body={post.body}
                  searchedAuthor={searchedAuthor}
                />
                <h2>{post.author.name}</h2>
                <h3>{new Date(post.publishedAt).toString()}</h3>
                <button
                  type="button"
                  onClick={() => setSearchedAuthor(post.author.name)}
                >
                  Find More By {post.author.name}
                </button>
              </div>
            );
          })}
    </div>
  );
}

export default Posts;
