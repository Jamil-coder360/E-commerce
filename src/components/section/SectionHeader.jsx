import React from 'react'

const SectionHeader = ({title, subtitle}) => {
  return (
// updated code
    <div className='space-y-6'>
        <p className='flex items-center gap-2'>
            <span className='h-10 w-5 bg-secondary rounded-sm inline-block'></span>
            <span className='text-secondary'>{subtitle}</span>
        </p>
        <h2 className='text-[36px] font-semibold'>{title}</h2>
    </div>

// previus code 
      // <div className="flex flex-col gap-4">
      //       <p className="text-[16px] font-semibold text-[#DB4444] mb-6">
      //       Today’s
      //       </p>
      //       <h2 className="text-[36px] font-semibold text-[#000000] leading-[1.4]">
      //         Flash Sales
      //       </h2>
      //     </div> 
  )
}


export default SectionHeader