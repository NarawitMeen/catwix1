import React from 'react'
import Image from 'next/image'

export default function index() {
  return (
    <>
    //first
    <div className=' flex bg-gradient-to-r from-indigo-600 to-teal-700 font-serif min-h-screen'>
      <div className='text-white h-fit mt-40 ml-24 bg-red-300'>
        <h1 className='text-6xl'>Discover New</h1>
        <h1 className='text-6xl'>Possibilitites</h1>
        <br></br>
        <h1 className='text-2xl'>Try it yourself, Downlode now.</h1>
      </div>
      <div className=' text-white h-fit mt-40 ml-96 bg-red-300'>
        <h1 className='text-6xl'>Logo</h1>
      </div>
    </div>

    //second
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
        hover:text-white hover:bg-teal-400 hover:transition-all '>
          Downlode the App
        </div>
      </div> 
    </div>  

    //third
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

    //fouth
    <div className ="contanier min-h-screen bg-white ">
      <div className='container flex mt-24'>
        <div className='h-fit w-96 ml-48'>
          <h1 className='text-4xl font-serif'>How the App Works</h1>
          <br></br>
          <h1 className='text-lg font-serif'>/01</h1>
          <br></br>
          <h1 className='text-xl font-serif'>Personalized Experience</h1>
          <br></br>
          <p className='text-lg font-thin'>I'm a paragraph. Click here to add your own text and edit me. 
            It’s easy. Just click “Edit Text” or double click me to add your own content and 
            make changes to the font</p>
        </div>
        <div className='h-fit w-fit ml-60'>
          <h1 className='text-5xl'>Pic</h1>
        </div>
      </div>

      <div className='container flex mt-24'>
        <div className='h-fit w-fit ml-96'>
          <h1 className='text-5xl'>Pic</h1>
        </div>
        <div className='h-fit w-96 ml-72'>
          <h1 className='text-4xl font-serif'>Clound Base Tehchnology</h1>
          <br></br>
          <h1 className='text-lg font-serif'>/02</h1>
          <br></br>
          <h1 className='text-xl font-serif'>Personalized Experience</h1>
          <br></br>
          <p className='text-lg font-thin'>I'm a paragraph. Click here to add your own text and edit me. 
            It’s easy. Just click “Edit Text” or double click me to add your own content and 
            make changes to the font</p>
        </div>
      </div>
    </div>

    //fifth
    <div className='text-white bg-gradient-to-r from-indigo-600 to-teal-700 font-serif min-h-screen'>
      <div className='flex text-white font-serif '>
        <div className='ml-48 mt-48'>
          <h1 className='text-5xl'>Our Story</h1>
        </div>
        <div className='h-fit w-72 mt-48 ml-96'>
          <h1 className='text-2xl'>Led by the belief that anyone can grow</h1>
          <br></br>
          <p className='text-lg font-thin font-serif'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. 
          Just click “Edit Text” or double click me to add your own content and make 
          changes to the font. Feel free to drag and drop me anywhere you like on your page.
          I’m a great place for you to tell a story and let your users know a little more about you.</p>
        </div>
      </div>
    </div>

    //six
    <div className='flex-col bg-white font-serif min-h-screen'>
      <div className='h-fit w-fit mt-36 ml-40'>
        <h1 className='text-5xl'>Satisfied Customers</h1>
      </div>
      <div className='flex justify-center space-x-16 mt-32'>
        <div className='h-fit w-72 bg-slate-100 p-4 shadow-lg rounded-lg'>
          <h1 className='text-4xl'>Pic</h1>
          <br></br>
          <h1 className='text-lg'>“I'm a testimonial. Click to edit me and add text that says 
            something nice about you and your services.”</h1>
          <br></br>
          <h1 className='text-lg'>Joan Mark</h1>
          <h1 className='text-lg'>Pix</h1>
        </div>
        <div className='h-fit w-72 bg-slate-100 p-4 shadow-lg rounded-md'>
          <h1 className='text-4xl'>Pic</h1>
          <br></br>
          <h1 className='text-lg'>“I'm a testimonial. Click to edit me and add text that says 
            something nice about you and your services.”</h1>
          <br></br>
          <h1 className='text-lg'>Joan Mark</h1>
          <h1 className='text-lg'>Pix</h1>
        </div>
        <div className='h-fit w-72 bg-slate-100 p-4 shadow-lg rounded-md'>
          <h1 className='text-4xl'>Pic</h1>
          <br></br>
          <h1 className='text-lg'>“I'm a testimonial. Click to edit me and add text that says 
            something nice about you and your services.”</h1>
          <br></br>
          <h1 className='text-lg'>Joan Mark</h1>
          <h1 className='text-lg'>Pix</h1>
        </div>
      </div>
    </div>

    //seven

    //eight
    <div className='flex bg-slate-200 min-h-screen'>
        <div className=''>
          <h1 className='text-3xl'>Go on</h1>
        </div>
    </div>
    </>
  )
}
