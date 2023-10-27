// import React from 'react'
import Laptop from '../assets/laptop2.png'

const Hero = () => {
  return (
    <div className='wrapper mt-10 bg-card rounded-lg h-[600px] mx-auto w-[90%]'>
      <img src={Laptop} alt="" />
      <div>
        <h1>
            Buy & Sell
        </h1>
        <h2>Crypto Wallet</h2>
        <p>Join world&apos;s biggest & trusted Exchange. Trade in Bitcoin, Ethereum, Ripple and many more currencies.</p>
      </div>
      <button className='btn p-2 rounded w-full '>
        Start Trading
      </button>
    </div>
  )
}

export default Hero
