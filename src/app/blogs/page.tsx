"use client"; 

import Link from 'next/link';
import React, { useEffect, useState } from 'react';


export interface Post {
  id: string;
  title: string;
  body: string;
  tags: string[];
  reactions: {
    likes: number;
    dislikes: number;
  };
  views: number;
  userId: string;
  comments?: { content: string }[];
}


function Page() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [visiblePosts, setVisiblePosts] = useState(4);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/posts`);
        if (!response.ok) throw new Error("Failed to fetch posts");
        
        const data = await response.json();
        setPosts(data.posts); // Store all posts
      } catch (error) {
        setError("Failed to fetch posts");
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getPosts();
  }, []);

  if (loading) return <div className="text-center text-blue-500">Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;
  if (posts.length === 0) return <p>No posts available.</p>;

  const loadMore = () => {
    setVisiblePosts((prev) => prev + 4);
  };

  return (
    <div className="max-w-3xl mx-auto mt-4">
      {posts.slice(0, visiblePosts).map((post) => (
        <div key={post.title} className="p-6 mb-6 bg-white shadow-lg rounded-lg">
          <div className='flex justify-between items-center'>
          <Link href={`/blogs/${post.id}`} className="text-2xl text-blue-400 font-bold mb-3">{post.title}</Link>
          {/* Author */}
          <div className="text-sm text-gray-400">Created by Author {post.userId}</div>
          </div>
         
          <p className="text-gray-700 line-clamp-3">{post.body}</p>

          {/* Tags */}
          <div className="mt-3 flex flex-wrap gap-2">
            {post.tags?.map((tag, index) => (
              <span key={index} className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                #{tag}
              </span>
            ))}
          </div>

          {/* Reactions */}
          <div className="mt-4 flex items-center justify-start space-x-4 text-gray-600">
            <span>👍 {post.reactions?.likes} Likes</span>
            <span>👎 {post.reactions?.dislikes} Dislikes</span>
            <span>👀 {post.views} Views</span>
          </div>
        </div>
      ))}
       {visiblePosts < posts.length && (
        <div className="text-center mt-6">
          <button 
            onClick={loadMore} 
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

export default Page;
