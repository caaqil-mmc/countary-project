import React from 'react'

const Sidebar = () => {
  return (
    <div className='h-screen sticky top-0 flex items-center justify-center bg-red-500  w-24'>
        <div className='bg-primary flex flex-col gap-4 rounded-full p-4 '>
            <button className='w-11 h-11 flex justify-center items-center font-bold uppercase border-b text-white mt-4 rounded-lg bg-gray-50/10 '>
                af
            </button>
            <button className='w-11 h-11 flex justify-center items-center font-bold uppercase border-b text-white  rounded-lg hover:bg-gray-50/10 '>
                as
            </button>
            <button className='w-11 h-11 flex justify-center items-center font-bold uppercase border-b text-white mb-4 rounded-lg hover:bg-gray-50/10 '>
                am
            </button>
            <button className='w-11 h-11 flex justify-center items-center font-bold uppercase border-b text-white mb-4 rounded-lg hover:bg-gray-50/10 '>
                au
            </button>
        </div>
      
    </div>
  )
}

export default Sidebar
