import React from 'react'
import Sidebar from "../components/Sidebar";

function Layout({children}) {
  return (
    <div className='flex w-full gap-4'>
        <Sidebar/>
        <main className='flex-1 bg-indigo-400 p-5'>
            {
                children
            }
        </main>
      
    </div>
  )
}

export default Layout
