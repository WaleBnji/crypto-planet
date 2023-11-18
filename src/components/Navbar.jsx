// import React from 'react'
import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <div>
      <nav className='fbc bg-card h-[80px] wrapper'>
        <h1>Logo</h1>
        <div className={`fbc ${showNav ? 'hidden' : ''} `}>
          <AiOutlineSearch className='mr-3' />
          <AiOutlineMenuUnfold
            onClick={() => {
              setShowNav(true);
            }}
          />
        </div>
        <AiOutlineClose
          className={`${!showNav ? 'hidden' : ''}`}
          onClick={() => {
            setShowNav(!showNav);
          }}
        />
        {showNav ?? (
          <div className='h-[100vh] bg-black z-20'>
            <h1>Navbar</h1>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
