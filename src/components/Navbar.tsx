import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <nav className='flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono' role='navigation'>
      <div>
          <Link href={'/'} className='pl-8'>Logo</Link>
      </div>
        <ul className='flex items-center space-x-4 px-4'>
            <Link href={'/'}>Home</Link>
            <Link href={'/about'}>About</Link>
            <Link href={"/contact"}>Contact</Link>
            <Link href={"/blogs"}>Blog</Link>
        </ul>
    </nav>
  )
}

export default Navbar