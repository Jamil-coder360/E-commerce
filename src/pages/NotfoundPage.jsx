import React from 'react'
import { Link } from 'react-router'

const NotfoundPage = () => {
  return (
    <section className='bg-[#FFFFFF]'>
      <div className="container mx-auto">
        <div className='flex items-center justify-start gap-3 text-center  pt-20'>
          <p className='text-[#000000] text-[14px] font-normal leading-[1.5] opacity-[50%]'>Home </p>
          <p className='text-[#000000] text-[14px] font-normal leading-[1.5] opacity-[50%]'>/</p>
           <span className='text-[#000000] text-[14px] font-normal leading-[1.5]'>404 Error</span>

        </div>
        <div className=' flex flex-col items-center justify-between pb-35'>
         <h1 className="text-[110px] text-[#000000] font-bold text-center mt-20">404 Not Found</h1>
          <p className="text-center mt-10 text-base font-normal text-[#000000]">
           Your visited page not found. You may go home page.
          </p>
          <div className="text-center mt-20">
            <Link
              to="/"
              className="inline-block px-6 py-3 bg-[#DB4444] text-white rounded hover:bg-[#C0392B] transition-colors duration-200"
            >
              Go Back Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NotfoundPage