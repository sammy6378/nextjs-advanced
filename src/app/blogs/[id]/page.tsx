import React from 'react'
import { posts } from '@/components/lib/Dummyposts';
function Page({params}:{params: {id: string}}) {
    const post = posts.find((p) => p.id.toString() === params.id);

    if (!post) {
        return <div>Post not found</div>;
      }
  return (
        <div key={post.id}>
            <div>Title: {post.title}</div>
            <div>{post.content}</div>
            <div>Author: {post.author}</div>
            <h3 className='text-blue-500'>Comments</h3>
            {post.comments.length > 0 ? (
          <ul>
            {post.comments.map((comment, index) => (
              <li key={index}>{comment.content}</li>
            ))}
          </ul>
        ) : (
          <p>No comments yet.</p>
        )}
        </div>
)}

export default Page