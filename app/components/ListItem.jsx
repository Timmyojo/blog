import getFormattedDate from '@/lib/getFormattedDate';
import Link from 'next/link'
import React from 'react'

export default function ListItem({post}) {
    const { id, title, date } = post;
    const formattedDate = getFormattedDate(date)
    return (
      <li className='mt-4 text-2xl'>
          <Link href={`/posts/${id}`}>{title}</Link>
          <p className='text-sm mt-1'>{ formattedDate}</p>
    </li>
  )
}
