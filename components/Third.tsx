import React from 'react'
import Image from 'next/image'

export default function Third() {
  return (
    <>
    <div className='text-white bg-gradient-to-r from-indigo-600 to-black font-serif min-h-screen'>
      <div className='h-fit w-auto ml-52 pt-24'>       
         <h1 className='text-5xl'>Features</h1>
         <br></br>
         <h1 className='text-base'>I'm a title. Click here to add your own text and edit me.</h1>
      </div>

      <div className='flex mt-16 justify-center'>
        <div className='h-fit w-52'>
          <h1 className='text-lg'>pic</h1>
          <br></br>
          <h1 className='text-2xl'>High Speed Performance</h1>
          <br></br>
          <h1 className='text-lg'>I'm a paragraph. Click here to add your own text and edit me.
           It’s easy. Just click “Edit Text” or double click me to add your own content
            and make changes to the font.</h1>
        </div>
        <div className='h-fit w-52 ml-20'>
          <h1 className='text-lg'>pic</h1>
          <br></br>
          <h1 className='text-2xl'>24/7  Online Support</h1>
          <br></br>
          <h1 className='text-lg'>I'm a paragraph. Click here to add your own text and edit me.
           It’s easy. Just click “Edit Text” or double click me to add your own content
            and make changes to the font.</h1>
        </div>
        <div className='h-fit w-52 ml-20'>
          <h1 className='text-lg'>pic</h1>
          <br></br>
          <h1 className='text-2xl'>Airtight<br></br>Security</h1>
          <br></br>
          <h1 className='text-lg'>I'm a paragraph. Click here to add your own text and edit me.
           It’s easy. Just click “Edit Text” or double click me to add your own content
            and make changes to the font.</h1>
        </div>
      </div>
    </div>
    </>
  )
}
