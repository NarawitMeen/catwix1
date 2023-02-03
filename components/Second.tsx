import React from 'react'

export default function Second() {
  return (
    <>
     <div className='flex bg-white font-serif min-h-screen'>
      <div className='h-fit w-fit mt-40 ml-24'>
        <h1 className='text-6xl'>Reinventing Mobile</h1>
        <h1 className='text-6xl'>Technology</h1>
      </div>
      <div className='flex-col h-fit w-60 ml-40 mt-40'>
        <h1 className='text-lg'>Join more than a million of happy users</h1>
        <br></br>
        <p className='text-base'>I'm a paragraph. Click here to add your own text and edit me. 
            It’s easy. Just click “Edit Text” or double click me to add your own content and 
            make changes to the font. Feel free to drag and drop me anywhere you like on your page. 
            I’m a great place for you to tell a story and let your users know a 
            little more about you.</p>
        <div className='h-fit w-fit mt-4 p-2 border-solid border-2 border-black rounded-lg 
        hover:text-white hover:bg-teal-800 hover:transition-all '>
          Downlode the App
        </div>
      </div> 
    </div> 
    </>
  )
}
