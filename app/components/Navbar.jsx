import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
      <nav className='p-2 shadow-md flex items-center justify-between prose prose-xl mx-auto'>
          <Link href={'/'} className='no-underline'>Blogs</Link>
          <div>
            <ul className=' flex gap-4 capitalize list-none p-0'>
              <li><Link href={'/'}>home</Link></li>
              <li><Link href={'/contact'}>contact</Link></li>
            </ul>
          </div>
    </nav>
  )
}
