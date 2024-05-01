import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header/Header'

function Root() {
  return (
    <> 
    <div className='continer'>

     <Header/>
     <Outlet/>
    </div>
    </>
   

  )
}

export default Root
