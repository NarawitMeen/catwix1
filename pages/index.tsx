import React from 'react'
import Image from 'next/image'
import First from '../components/First'
import Second from '../components/Second'
import Third from '../components/Third'

export default function index() {
  return (
    <>
      <First/>
      <Second/> 
      <Third/>


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

    <div className='flex bg-gradient-to-r from-indigo-600 to-teal-700 font-serif min-h-screen'>
      <div className='mt-32 ml-56 text-white text-5xl w-72'>
        <h1>For Any Assitance Required Please Reach Out</h1>
      </div>
      <div className='mt-32 ml-48'>
        <form>
          <label className =''>First Name</label>
          <input type='text' value='' disabled />
        </form>
      </div>
    </div>
  </>
  )
}
