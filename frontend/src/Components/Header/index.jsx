import React from 'react'
import Topbar from './TopBar'
import Navbar from './Navbar'

export default function Header() {
  return (
    <header className='border-b border-gray-200'>
     <Topbar/> 
     <Navbar/>
    </header>
  )
}
