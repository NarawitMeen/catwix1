import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
        <div className='container bg-black flex justify-between h-20 w-full font-serif text-white sticky top-0'>
            <div className='flex justify-center items-center ml-24'>
                <h1 className='text-xl'>Go on</h1>
            </div>
            <ul className='flex jusify-centrer items-center mr-20'>
                <li className='px-5'>
                    <Link href="">
                        <h1 className='text-2l hover:text-indigo-300 hover:delay-150'>Home</h1>
                    </Link>
                </li>
                
                <li className='px-5'>
                    <Link href="">
                        <h1 className='text-2l hover:text-indigo-300 hover:delay-150'>The App</h1>
                    </Link>
                </li>
                
                <li className='px-5'>
                    <Link href="">
                        <h1 className='text-2l hover:text-indigo-300 hover:delay-150'>Features</h1>
                    </Link>
                </li>
                    
                <li className='px-5'>
                    <Link href="">
                        <h1 className='text-2l hover:text-indigo-300 hover:delay-150'>Abouts us</h1>
                    </Link>
                </li>

                <li className='px-5'>

                    <Link href="">
                        <h1 className='text-2l hover:text-indigo-300 hover:delay-150'>Reviews</h1>
                    </Link>
                </li>
        
                <li className='px-5'>
                    <Link href="">
                        <h1 className='text-2l hover:text-indigo-300 hover:delay-150'>Contact</h1>
                    </Link>
                </li>
            </ul>
        </div>
  )
}
