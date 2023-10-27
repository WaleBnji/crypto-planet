// import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {AiOutlineMenuUnfold} from 'react-icons/ai'

const Navbar = () => {
  return (
    <div>
       <nav className='fbc bg-card h-[40px] wrapper'>
        <h1>Logo</h1>
        <div className='fbc'>
        <AiOutlineSearch  className='mr-3'/>
        <AiOutlineMenuUnfold />
        </div>
      </nav>
    </div>
  )
}

export default Navbar
