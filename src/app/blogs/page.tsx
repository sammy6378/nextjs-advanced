import React from 'react'
import {posts} from  '../../components/lib/Dummyposts'
import Link from 'next/link'
function Blogs() {
 
  return (
    <>
    <div className='mb-6'>Blogs Page</div>
    {
        posts.map(post =>{
            return (
                <div key={post.id}>
                    <Link href={`/blogs/${post.id}`} className='text-blue-600'>{post.title}</Link>
                </div>
            )
        })

    }
    <Link href= {'/more-blogs'}>More blogs</Link>
    </>
  )
}

export default Blogs