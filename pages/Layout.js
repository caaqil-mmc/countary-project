import React from 'react'
import Sidebar from "../components/Sidebar";

function Layout({children}) {
  return (
    <div className='flex w-full gap-4'>
        <Sidebar/>
        <main className='bg-indigo-400'>
            {
                children
            }
        </main>
      
    </div>
  )
}

export default Layout
