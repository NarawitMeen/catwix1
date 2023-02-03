import React from 'react'
import Image from 'next/image'

export default function () {
  return (
    <>
    <div className=' flex bg-gradient-to-r from-indigo-600 to-teal-700 font-serif min-h-screen'>
      <div className='text-white h-fit mt-40 ml-24'>
        <h1 className='text-6xl'>Discover New</h1>
        <h1 className='text-6xl'>Possibilitites</h1>
        <br></br>
        <h1 className='text-2xl'>Try it yourself, Downlode now.</h1>
      </div>
      <div className=''>
        <Image src='/cat.jpg' alt='' width={400} height={800} className='border rounded-lg mt-40 ml-72'></Image>
      </div>
    </div>
    </>
  )
}
