import React from 'react'

export default function Footer() {
  return (
    <>
       <div className='flex bg-slate-200 max-h-screen'>
        <div className='h-fit w-fit p-24'>
          <h1 className='text-3xl'>Go on</h1>
          <div className='text-sm h-fit w-96 mt-4'>
            <span>Tel: 123-4567890 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
            <span>500 Terry Francois Street</span>
            <br></br>
            <span>Email: info@email.com&nbsp; &nbsp; &nbsp; &nbsp; </span>
            <span>San Francisco, CA 94158</span>
          </div>
          <div className='space-x-4 mt-4'>
            <span className=''>Pic</span>
            <span className=''>Pic</span>
            <span className=''>Pic</span>
          </div>
        </div>
        <div className='h-fit w-max p-24 ml-56'>
          <div className=''>
            <span className='text-2xl'>pic</span>
            <span className='text-2xl'>pic</span>
            <h1 className='text-lg pt-4'>© 2035 by Go On. Powered and secured by Wix</h1>
          </div>
        </div>
    </div>
    </>
  )
}
