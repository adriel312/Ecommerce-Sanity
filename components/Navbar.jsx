import React from 'react'
import Link from 'next/link'
import { AiFillHome, AiOutlineShopping } from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <p className='logo'>
        <AiFillHome id='home'/>
        <Link href='/'> Home</Link>
      </p>
    </div>
  )
}

export default Navbar