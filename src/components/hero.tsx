import React from 'react'

const Hero = () => {
  return (
    <div className='relative bg-[url("/main-background.avif")] bg-cover bg-center h-screen w-screen -mt-20'>
      <div className='absolute inset-0 bg-black/50 text-center'>
        <p className='mt-20 text-white text-[30px] ' > Welcome to Buyyer - Your One-Stop Online Marketplace!</p>
        <p className='mt-80 w-2xl mx-auto text-[20px] text-white'>At Buyyer, we bring you a seamless shopping experience with thousands of quality products across every category - from fashion and electronics to beauty, home, and more!</p>
        <p className='text-green-500 my-2 text-[20px] '>Catch the hottest offers before they're gone!</p>
        <button className='bg-gray-800 text-white py-3 px-5 hover:shadow shadow-white rounded-md cursor-pointer hover:bg-gray-700 hover:scale-105 duration-500'>Get Started</button>
      </div>
    </div>
  )
}

export default Hero
