import { getPostsMeta } from '@/lib/getPosts';
import React from 'react'
import ListItem from './ListItem';

export default async function Posts() {
  const posts = await getPostsMeta();

  if (posts.length <= 0) {
    return <p className='mt-10 text-center'>Sorry, no posts available</p>
  }
  return (
    <section className='mx-auto max-w-2xl'>
      <h2 className='text-4xl font-bold'>Blog</h2>
      <ul className='w-full list-none p-0'>
        {
          posts.map(post => (
            <ListItem key={post.key} post={post} />
          ))}
      </ul>
    </section>
  )
}
